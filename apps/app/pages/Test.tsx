import {
  Button,
  Layer,
  Typography,
  Slider,
} from '@devlaunchers/components/components/atoms';
import {
  FormField,
  OpenResponse,
} from '@devlaunchers/components/components/organisms';
import Tag from '@devlaunchers/components/components/atoms/Tag';
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from '@devlaunchers/components/src/components/Dialog';
import { FunctionComponent } from 'react';
import styles from './Test.module.css'; // Import the CSS module

interface TestingProps {}

const createFormField = (
  id: any,
  label: any,
  placeholder: any,
  onChange: any,
  width = '320px'
) => (
  <FormField
    id={id}
    error=""
    label={label}
    onChange={onChange}
    placeholder={placeholder}
    width={width}
  />
);

const colors = [
  'var(--jupiter-500, #FF7F0E)',
  'var(--saturn-500, #FFAB00)',
  'var(--uranus-500, #81C3D7)',
  'var(--neptune-500, #3A7CA5)',
];

const textAreas = [
  {
    id: 0,
    label: 'Please breifly describe your experience in development or design *',
    placeholder: 'My experience with development / design is...',
  },
  {
    id: 1,
    label: 'Why would you like to be a Dev Launcher?',
    placeholder: 'I would like to be a Dev Launcher because...',
  },
  {
    id: 2,
    label: 'Anything else you would like to share with us?',
    placeholder: 'I just want the Team Lead to know...',
  },
];

const handleChange = () => {};

const Test: FunctionComponent<TestingProps> = () => {
  return (
    <div className={styles.container}>
      <Typography className={styles.typography} type="h1">
        Volunteer Application
      </Typography>

      <div className={styles.colorStrip}>
        {colors.map((el, index) => {
          return (
            <div
              key={index}
              className={styles.colorSegment}
              style={{ background: el }}
            ></div>
          );
        })}
      </div>
      {/* <Layer hasRainbowTop type="light">
        <div
          style={{
            height: '100px',
            width: '100%',
          }}
        />
        hello yello
      </Layer> */}
      <div className={styles.formContainer}>
        {createFormField(
          'fullname',
          'Your Full name *',
          'John Smith',
          handleChange
        )}
        {createFormField(
          'email',
          'Your email *',
          'johnsmith@gmail.com',
          handleChange
        )}
        {createFormField(
          'discord',
          'Your discord username ',
          'johnsmith#1234',
          handleChange
        )}
        {createFormField(
          'discord',
          <pre>
            {
              'What are your relevant skills? \nPlease separate skills with a comma.'
            }
          </pre>,
          'HTML, JavaScript, Atomic Design, ect.',
          handleChange
        )}
      </div>
      <div className={styles.formContainer}>
        <Tag
          color="white"
          label="How many hours a week would you like to Volunteer? *"
          onClose={() => {}}
          size="sm"
        />
        <Slider max={10} min={0} onChange={() => {}} suffix="HRS" withLabels />
      </div>
      <div className={styles.formContainer}>
        {textAreas.map((el, index) => {
          return (
            <OpenResponse
              id={String(index)}
              cols={50}
              error=""
              label={el.label}
              onChange={() => {}}
              placeholder={el.placeholder}
              rows={5}
            />
          );
        })}
      </div>
      <div className={styles.formContainer}>
        <Typography type="p">
          <pre>
            {
              'Want to add your portfolio and resume ? \nJust add a link or file by using the field or button below.'
            }
          </pre>
        </Typography>
        <Button buttonSize="standard" buttonType="secondary">
          Secondary
        </Button>
      </div>
      <div className={styles.formContainer}>
        <Dialog>
          <DialogTrigger asChild>
            <Button buttonType="primary" buttonSize="standard">
              Submit
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                <div className="h-8 w-[448px] bg-white uppercase" />
              </DialogTitle>
            </DialogHeader>
            <div className="h-36 w-[448px] bg-grayscale-100"></div>
            <div className="h-8 w-[448px] bg-white"></div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Test;
