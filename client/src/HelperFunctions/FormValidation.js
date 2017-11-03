import validator from 'validator';

export function required (value) {
  if (!value.toString().trim().length) {
    // We can return string or jsx as the 'error' prop for the validated Component
    return 'require';
  }
};
 
export function email (value) {
  if (!validator.isEmail(value)) {
    return `${value} is not a valid email.`
  }
};

