type Rule = {
  test: (value: string) => boolean;
  message: string;
};

const rules: Record<string, Rule[]> = {
  parent_name: [
    { test: (v) => v.trim().length >= 2, message: 'Please enter your name' },
  ],
  email: [
    { test: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), message: 'Please enter a valid email' },
  ],
  phone: [
    {
      test: (v) => /^(\+?6?0)?1[0-9]{8,9}$/.test(v.replace(/[\s-]/g, '')),
      message: 'Please enter a valid Malaysian phone number',
    },
  ],
  child_name: [
    { test: (v) => v.trim().length >= 2, message: "Please enter your child's name" },
  ],
  child_age: [
    { test: (v) => v !== '', message: "Please select your child's age" },
  ],
  message: [
    { test: (v) => v.trim().length >= 5, message: 'Please enter a message' },
  ],
};

export function validate(name: string, value: string): string | null {
  const fieldRules = rules[name];
  if (!fieldRules) return null;
  for (const rule of fieldRules) {
    if (!rule.test(value)) return rule.message;
  }
  return null;
}

export function validateForm(data: Record<string, string>, requiredFields: string[]): Record<string, string> {
  const errors: Record<string, string> = {};
  for (const field of requiredFields) {
    const error = validate(field, data[field] || '');
    if (error) errors[field] = error;
  }
  return errors;
}
