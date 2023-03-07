import type { FormikContextType } from 'formik';
import { connect } from 'formik';

type FormErrorScrollerProps = {
  align?: ScrollIntoViewOptions['block'];
  focusAfterScroll?: boolean;
} & { formik?: FormikContextType<Record<string, unknown>> };

const FormErrorScroller = ({
  formik,
  align,
  focusAfterScroll,
}: FormErrorScrollerProps) => {
  if (!formik) {
    throw new Error(
      "Please use this 'FormErrorScroller' component within formik rendering method"
    );
  }
  const { isSubmitting, isValidating, errors } = formik;
  const keys = Object.keys(errors);

  if (keys.length > 0 && isSubmitting && !isValidating) {
    const selector = `[name="${keys[0]}"]`;
    const errorElement = document.querySelector(selector) as HTMLInputElement;

    console.log(errorElement);
    if (errorElement) {
      errorElement.scrollIntoView({
        behavior: 'smooth',
        block: align || 'center',
        inline: align || 'center',
      });
      if (focusAfterScroll) {
        errorElement.focus();
      }
    }
  }
  return null;
};

export default connect(FormErrorScroller);
