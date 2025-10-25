import React, { useEffect, useState } from 'react';
import { ChevronLeft, Calendar } from 'lucide-react';
import { Button, Radio } from '@devlaunchers/components/src/components/atoms';
import { useRouter } from 'next/router';
import agent from '@devlaunchers/utility/agent';
import { Opportunity, Project } from '@devlaunchers/models/opportunity';
import { Skill } from '@devlaunchers/models/skill';
import { SkillLevel } from '@devlaunchers/models';
import { Project as NestedProject } from '@devlaunchers/models/project';
import { FormField } from '@devlaunchers/components/src/components/organisms';

const EXPERIENCE_LEVELS = ['Beginner', 'Intermediate', 'Advanced'];
const ROLE_RESPONSIBILITIES = [
  'Contribute to creating deliverables',
  'Design and develop robust backend solutions',
  'Oversee and manage active project initiatives',
];
const ROLE_CATEGORIES = ['Product / UX', 'Development', 'QA', 'Operations'];

const ROLE_TYPES = [
  'Product Lead',
  'UX Designer',
  'UX Researcher',
  'Information Architect',
  'Lead Developer',
  'Back-end Developer',
];

const MAXIMUM_RESPONSIBILITIES = 10;

interface OpportunityFormState {
  startDate: Date | null;
  title: string;
  roleType: string;
  roleCategory: string;
  skills: Skill[];
  commitmentHoursPerWeek: number;
  experienceLevel: string;
  roleDescription: string;
  roleResponsibilities: string[]; // array of responsibility strings
  whyJoin: string;
  // Use the Project type from your models if available; otherwise Project | string...
  projects: ProjectHolder[];
}

interface ProjectHolder {
  id: string;
  title: string;
}

const initialFormState: OpportunityFormState = {
  startDate: null,
  title: '',
  roleType: '',
  roleCategory: '',
  skills: [],
  commitmentHoursPerWeek: 0,
  experienceLevel: 'Beginner',
  roleDescription: '',
  roleResponsibilities: [],
  whyJoin: '',
  projects: [],
};

const OpportunityForm = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isLoadingOpportunity, setIsLoadingOpportunity] = useState(false);
  const [existingProjects, setExistingProjects] = useState<ProjectHolder[]>([]);
  const [formData, setFormData] =
    useState<OpportunityFormState>(initialFormState);

  // If there's an "edit" query param, load that opportunity for editing
  useEffect(() => {
    const editId = router.query.edit;
    if (!editId) return;
    let mounted = true;

    const id = String(editId);
    setIsLoadingOpportunity(true);
    setIsEditing(true);
    setEditingId(id);

    (async () => {
      try {
        const res = await agent.Opportunities.getById(id);
        if (!mounted) return;
        // support a few possible response shapes from the API:
        //  - { data: { id, attributes: {...} } }
        //  - { id, attributes: {...} }
        //  - array / unexpected -> try first item
        const raw =
          (res && (res.data ?? res)) ||
          (Array.isArray(res) ? res[0] : res) ||
          res;
        const attributes = raw?.attributes ?? raw;

        if (!attributes) {
          throw new Error('Opportunity attributes not found');
        }

        const flatProjects = attributes?.projects?.data?.map((p: Project) => ({
          id: p.id,
          title: p.title,
        }));

        setFormData({
          startDate: attributes.startDate ?? '',
          title: attributes.title ?? '',
          roleType: attributes.roleType ?? attributes.role_type ?? '',
          roleCategory:
            attributes.roleCategory ?? attributes.role_category ?? '',
          skills: attributes.skills,
          commitmentHoursPerWeek: attributes.commitmentHoursPerWeek ?? 0,
          experienceLevel: attributes.level ?? 'Beginner',
          roleDescription: attributes.description ?? '',
          roleResponsibilities: Array.isArray(attributes.expectations)
            ? attributes.expectations.map(
                (e: any) => e?.expectation ?? String(e)
              )
            : [],
          whyJoin: attributes.whyJoin ?? attributes.why_join ?? '',
          projects: flatProjects,
        });
      } catch (err) {
        console.error('Failed to load opportunity for edit', err);
        setSubmitError('Failed to load opportunity for editing.');
      } finally {
        setIsLoadingOpportunity(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [router.query]);

  // Load projects
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const result: NestedProject[] = await agent.Projects.list();
        const flatProjects = result.map((p) => ({
          id: p.id,
          title: p.attributes.title,
        }));
        if (mounted) setExistingProjects(flatProjects);
      } catch (err) {
        console.error('Failed to load projects', err);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const handleInputChange = (
    field: keyof OpportunityFormState,
    value: string | (Project | string)[] | Date | null | number
  ) => {
    setFormData(
      (prev) =>
        ({ ...prev, [field]: value } as Pick<
          OpportunityFormState,
          keyof OpportunityFormState
        >)
    );
  };

  const handleCheckboxChange = (
    field: keyof OpportunityFormState,
    value: any, // can be Project in this case
    checked: boolean
  ) => {
    setFormData((prev) => {
      const prevVal = prev[field];
      if (field === 'projects' && Array.isArray(prevVal)) {
        const arr = prevVal as Project[];
        return {
          ...prev,
          projects: checked
            ? [...arr, value as Project]
            : arr.filter((p) => p.id !== (value as Project).id),
        };
      }

      // fallback for roleResponsibilities etc.
      const arr = Array.isArray(prevVal) ? (prevVal as string[]) : [];
      return {
        ...prev,
        [field]: checked
          ? [...arr, value as string]
          : arr.filter((item) => item !== value),
      };
    });
  };

  const submitForm = async () => {
    // Basic validation
    if (
      !formData.title ||
      !formData.roleType ||
      !formData.roleCategory ||
      !formData.experienceLevel ||
      !formData.roleDescription ||
      formData.roleResponsibilities.length === 0 ||
      !formData.whyJoin ||
      formData.projects.length === 0
    ) {
      setSubmitError('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    // Try to parse a numeric hours-per-week value out of the timeCommitment string.
    // If parsing fails, omit the field.
    const commitmentHoursPerWeek = Number(formData.commitmentHoursPerWeek);

    const payload = {
      data: {
        title: formData.title,
        description: formData.roleDescription,
        skills: formData.skills,
        level: formData.experienceLevel,
        interests: [],
        commitmentHoursPerWeek,
        expectations: formData.roleResponsibilities.map((r: string) => ({
          expectation: r,
        })),
        // Map department/projectTeam to roleType/roleCategory if appropriate:
        roleType: formData.roleType,
        roleCategory: formData.roleCategory,
        whyJoin: formData.whyJoin,
        estimatedStartDate: formData.startDate,
        projects: {
          connect: formData.projects.map((p) => ({ id: p.id })),
        },
      },
    };

    console.log('Payload:', payload);

    try {
      if (isEditing && editingId) {
        // update existing opportunity
        payload.data['updateDate'] = new Date().toISOString();
        const res = await agent.Opportunities.put(editingId, payload.data);
        console.log('Opportunity updated:', res);
      } else {
        payload.data['postedDate'] = new Date().toISOString();
        // create new opportunity
        const res = await agent.Opportunities.post(payload.data);
        console.log('Opportunity created:', res);
      }

      router.push('/dev-recruiters/dashboard');
    } catch (err) {
      console.error('Failed to submit form', err);
      setSubmitError('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    {
      title: `${isEditing ? 'Edit' : 'Create'} Role Submission`,
      subtitle: 'Please fill out the form below',
      content: (
        <div className="space-y-6">
          <div>
            <label className="block text-white text-sm mb-2">
              Estimated Start Date
            </label>
            <div className="relative">
              <input
                type="date"
                className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400"
                value={
                  formData.startDate
                    ? new Date(formData.startDate).toISOString().split('T')[0]
                    : ''
                }
                onChange={(e) =>
                  handleInputChange(
                    'startDate',
                    e.target.value ? new Date(e.target.value) : null
                  )
                }
              />
            </div>
          </div>

          <div>
            <label className="block text-white text-sm mb-2">Title *</label>
            <input
              type="text"
              placeholder="e.g. Information Product Manager (AI Technology)"
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
            />
          </div>

          {/* <FormField
            width="100%"
            required
            label="Title"
            name="title"
            id="title"
            placeholder="e.g. Product Manager (AI Technology)"
            value={formData.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
          /> */}

          <div>
            <label className="block text-white text-sm mb-2">Role Type *</label>
            <div className="bg-gray-800 border border-gray-600 rounded p-3 space-y-2">
              {ROLE_TYPES.map((type) => (
                <div>
                  <label key={type} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="roleType"
                      value={type}
                      checked={formData.roleType === type}
                      onChange={() => handleInputChange('roleType', type)}
                      className="mt-1"
                    />
                    <span className="text-white text-sm">{type}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-white text-sm mb-2">
              Role Category *
            </label>
            <div className="bg-gray-800 border border-gray-600 rounded p-3 space-y-2">
              {ROLE_CATEGORIES.map((category) => (
                <label key={category} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="roleCategory"
                    value={category}
                    checked={formData.roleCategory === category}
                    onChange={() => handleInputChange('roleCategory', category)}
                    className="mt-1"
                  />
                  <span className="text-white text-sm">{category}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-white text-sm mb-2">
              Commitment Hours/Week *
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                placeholder="e.g. 5"
                value={formData.commitmentHoursPerWeek ?? ''}
                onChange={(e) =>
                  handleInputChange(
                    'commitmentHoursPerWeek',
                    e.target.value ? Number(e.target.value) : undefined
                  )
                }
                className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400"
              />
              <span className="text-white">hours/week</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: `${isEditing ? 'Edit' : 'Create'} Role Submission`,
      subtitle: `Last saved: ${new Date().toLocaleString()}`,
      content: (
        <div className="space-y-6">
          <div>
            <label className="block text-white text-sm mb-2">
              Experience Level *
            </label>
            <div className="space-y-2">
              {EXPERIENCE_LEVELS.map((level) => (
                <label key={level} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="experienceLevel"
                    value={level}
                    checked={formData.experienceLevel === level}
                    onChange={(e) =>
                      handleInputChange('experienceLevel', e.target.value)
                    }
                    className="text-purple-500"
                  />
                  <span className="text-white text-sm">{level}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-white text-sm mb-2">
              Link Projects *
            </label>
            <div className="bg-gray-800 border border-gray-600 rounded p-3 space-y-2">
              {existingProjects.map((project) => (
                <label key={project.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="projects"
                    value={project.id}
                    checked={formData.projects.some((p) => p.id === project.id)}
                    onChange={(e) =>
                      handleCheckboxChange(
                        'projects',
                        project,
                        e.target.checked
                      )
                    }
                    className="mt-1"
                  />
                  <span className="text-white text-sm">{project.title}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-white text-sm mb-2">
              Role Description *
            </label>
            <textarea
              rows={4}
              placeholder="Describe the role in detail..."
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 resize-none"
              value={formData.roleDescription}
              onChange={(e) =>
                handleInputChange('roleDescription', e.target.value)
              }
            />
          </div>

          <div>
            <label className="block text-white text-sm mb-2">
              Role Responsibilities *
            </label>

            <div className="bg-gray-800 border border-gray-600 rounded p-3 space-y-2">
              {/* Existing role responsibilities checkboxes */}
              {ROLE_RESPONSIBILITIES.map((responsibility) => (
                <label
                  key={responsibility}
                  className="flex items-start space-x-2"
                >
                  <input
                    type="checkbox"
                    checked={formData.roleResponsibilities.includes(
                      responsibility
                    )}
                    onChange={(e) =>
                      handleCheckboxChange(
                        'roleResponsibilities',
                        responsibility,
                        e.target.checked
                      )
                    }
                    className="mt-1"
                  />
                  <span className="text-white text-sm">{responsibility}</span>
                </label>
              ))}

              {/* Dynamic custom responsibilities */}
              {formData.roleResponsibilities
                .filter((r) => !ROLE_RESPONSIBILITIES.includes(r))
                .map((r, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={r}
                      onChange={(e) =>
                        setFormData((prev) => {
                          const updated = [...prev.roleResponsibilities];
                          const customIdx = updated.findIndex((v) => v === r);
                          if (customIdx !== -1)
                            updated[customIdx] = e.target.value;
                          return { ...prev, roleResponsibilities: updated };
                        })
                      }
                      className="flex-1 bg-white border border-gray-600 rounded px-2 py-1 text-black text-sm"
                    />
                    <Button
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          roleResponsibilities:
                            prev.roleResponsibilities.filter(
                              (val) => val !== r
                            ),
                        }))
                      }
                      className="text-red-400 text-sm"
                    >
                      Remove
                    </Button>
                  </div>
                ))}

              {/* Add new custom responsibility */}
              {formData.roleResponsibilities.length <
                MAXIMUM_RESPONSIBILITIES && (
                <Button
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      roleResponsibilities: [...prev.roleResponsibilities, ''],
                    }))
                  }
                  className="mt-2 text-purple-500 text-sm hover:underline"
                >
                  + Add Responsibility
                </Button>
              )}

              <p className="text-gray-400 text-xs mt-1">
                Maximum {MAXIMUM_RESPONSIBILITIES} responsibilities allowed
              </p>
            </div>
          </div>

          <div>
            <label className="block text-white text-sm mb-2">Why Join? *</label>
            <textarea
              rows={4}
              placeholder="Join an amazing team to build impactful projects..."
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 resize-none"
              value={formData.whyJoin}
              onChange={(e) => handleInputChange('whyJoin', e.target.value)}
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-400 mb-6">
          <Button
            type="primary"
            onClick={() => router.push('/dev-recruiters/dashboard')}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Return To Dashboard</span>
          </Button>
        </div>

        {isLoadingOpportunity && (
          <div className="mb-4 text-gray-400">Loading opportunity...</div>
        )}

        {/* Form Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold mb-1">
              {steps[currentStep].title}
            </h1>
            <p className="text-gray-400 text-sm">
              {steps[currentStep].subtitle}
            </p>
          </div>
        </div>

        {/* Form Content */}
        <div className="space-y-8">{steps[currentStep].content}</div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-12">
          <Button
            className={`px-6 py-2 border border-gray-600 rounded text-sm ${
              currentStep === 0
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-gray-800'
            }`}
            onClick={() => currentStep > 0 && setCurrentStep(currentStep - 1)}
            disabled={currentStep === 0}
          >
            Previous Step
          </Button>

          <Button
            className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded text-sm"
            onClick={() => {
              if (currentStep < steps.length - 1) {
                setCurrentStep(currentStep + 1);
              } else {
                // Handle final submission
                submitForm();
              }
            }}
            disabled={isSubmitting}
          >
            {isSubmitting
              ? 'Submitting...'
              : currentStep < steps.length - 1
              ? 'Continue Form'
              : isEditing
              ? 'Update Role'
              : 'Submit Form'}
          </Button>
        </div>

        {submitError && (
          <div className="mt-4 text-red-400 text-sm">{submitError}</div>
        )}

        {/* Step Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentStep ? 'bg-purple-500' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpportunityForm;
