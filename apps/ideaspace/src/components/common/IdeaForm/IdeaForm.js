import React, { useState } from 'react';

import { Field, Form, Formik, FormikHelpers, useFormikContext } from 'formik';
import * as Yup from 'yup';
import { atoms, organisms } from '@devlaunchers/components/src/components';
import Popballoon from '../Popover/Popover';
import popoverSvg from '../../../images/popover.svg';
import SubmissionButton from './SubmissionButton';
import EditionButton from './EditionButton';

const IdeaForm = ({
	initialValues,
	SignupSchema,
	submitHandler,
	unsavedHandler,
	formButton,
	sending,
	clickHandler
}) => {

	const compareValuesToInitial = (values) => {
		const name = Object.keys(values);
		for (let i = 0; i < name.length; i++) {
			if (values[name[i]] !== initialValues[name[i]]) {
				return true;
			}
		}
		return false;
	}

	const AutoSubmitToken = () => {
		const { values, submitForm } = useFormikContext();
		React.useEffect(() => {
			if (compareValuesToInitial(values)) {
				unsavedHandler(true);
			} else {
				unsavedHandler(false);
			}
		}, [values]);
		return null;
	};

	return (
		<div style={{ margin: '1rem' }}>
			<Formik
				initialValues={initialValues}
				validationSchema={SignupSchema}
				onSubmit={submitHandler}
				enableReinitialize
			>

				{({ errors, setFieldValue, touched }) => (
					<Form
						style={{
							maxWidth: '36rem',
							margin: '1.5rem auto 1.5rem',
							textAlign: 'left',
						}}
					>
						<AutoSubmitToken />
						<atoms.Typography type='h4' style={{
							maxWidth: '37rem',
							margin: '1rem auto 2.5rem',
							textAlign: 'left',
							fontSize: '1.5rem',
						}}>
							Idea Info
							<hr noshade="false" />
						</atoms.Typography>

						<atoms.Box
							flexDirection='column'
							gap='2rem'
						>
							<atoms.Box maxWidth='20rem' flexDirection='column'>
								<Field
									required
									as={organisms.FormField}
									label='Idea Name&nbsp;'
									placeholder='Your Product Name'
									id='ideaName'
									name='ideaName'
									touched={touched['ideaName']}
									error={errors.ideaName}
								/>
							</atoms.Box>
							<atoms.Box flexDirection='column'>
								<Field
									required
									as={organisms.OpenResponse}
									label='What is your idea?&nbsp;'
									placeholder='What is your product idea? Would it be helpful or fun? Who would use it and why?'
									id='description'
									name='description'
									touched={touched['description']}
									error={errors.description}
									cols={50}
									rows={5}
								/>
							</atoms.Box>
							<atoms.Box flexDirection='column'>
								<Field
									required
									as={organisms.OpenResponse}
									label='Do you have any relevant experience in Development or design?&nbsp;'
									placeholder="If you have any relevant experience in development or design, please explain here. This information will be shared with Devlaunchers and won't be publicly shown in the workshopping page."
									id='experience'
									name='experience'
									touched={touched['experience']}
									error={errors.experience}
									cols={50}
									rows={5}
								/>
							</atoms.Box>
							<atoms.Box flexDirection='column'>
								<Field
									as={organisms.OpenResponse}
									label='who do you think your idea is helpful to?'
									placeholder='Describe your audience, including their demographic information, technology experience, why they would be interested in your idea, etc.'
									id='targetAudience'
									name='targetAudience'
									cols={50}
									rows={5}
								/>
							</atoms.Box>
							<atoms.Box flexDirection='column'>
								<Field
									required
									as={organisms.OpenResponse}
									label='What Features would your Product have?&nbsp;'
									placeholder='A list of possible features your product could have.'
									id='features'
									name='features'
									touched={touched['features']}
									error={errors.features}
									cols={50}
									rows={5}
								/>
							</atoms.Box>
							<Field
								as={organisms.OpenResponse}
								label='Anything else you would like to share with us?'
								placeholder='Want to share something else not listed above?'
								id='extraInfo'
								name='extraInfo'
								cols={50}
								rows={5}
							/>
							<Field
								as={organisms.FormField}
								label='Do you have a catchy tagline for this idea submission?'
								placeholder='Your Tagline'
								id='tagline'
								name='tagline'
							/>

							<atoms.Box flexDirection='column'>
								<atoms.Typography type='label' style={{ marginLeft: '1rem', marginBottom: '0.5rem' }}>
									what level of involvement do you want to have after submission?
								</atoms.Typography>
								<atoms.Box flexDirection='row' alignItems='flex-end' justifyContent='space-between'>
									<Field as="select" name="involveLevel" style={{ fontSize: '1rem', padding: '0.5rem', width: '95%' }}>
										<option value="none">I don’t want to be involved after submitting</option>
										<option value="minimum">I want to “own” this idea to help with workshopping and designing until it become a project</option>
										<option value="medium">I want to “own” this idea and also be part of the development/design team when it becomes a project</option>
										<option value="highly">I want to “own” this idea and also believe have the skills necessary to apply as the product leadto make it a successful project</option>
									</Field>

									<atoms.ToolTip
										content="As an “idea owner” you’ll own the idea and be in charge of refine and update the information on the workshipping page."
										direction="top"
										delay={100}
									>
										<img alt='submit_image' src={popoverSvg} />
									</atoms.ToolTip>
								</atoms.Box>
							</atoms.Box>

							<atoms.Typography type='p' style={{ marginTop: '0.5rem', }}>
								After submitting your idea will be reviewed and enter the workshopping stage!
							</atoms.Typography>


							<atoms.Box style={{ fontSize: '1rem' }}>
								<atoms.Checkbox
									label='I have read and agree to the Terms and Conditions.'
									disabled={false}
									required
								/>
							</atoms.Box>

							<atoms.Box style={{ justifyContent: 'flex-end' }}>
								{formButton == "submit" ? (
									<SubmissionButton
										sending={sending}
									/>
								) : (
									<EditionButton
										clickHandlerButton={clickHandler}
										sending={sending}
									/>
								)}
							</atoms.Box>


						</atoms.Box>

					</Form>
				)}
			</Formik>
		</div>
	);
};

export default IdeaForm;