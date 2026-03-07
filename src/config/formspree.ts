/**
 * Formspree Configuration
 *
 * HOW TO SET UP (5 minutes):
 * 1. Go to https://formspree.io and create a free account
 * 2. Click "New Form" → name it "KURAI Contact" → copy the form ID (e.g. "xpzvqkla")
 * 3. Repeat for "KURAI Free Trial" and "KURAI Newsletter"
 * 4. Paste each ID below, replacing the "YOUR_..._FORM_ID" placeholders
 *
 * The free plan gives you 50 submissions/month — plenty for getting started!
 */

export const FORMSPREE_IDS = {
  contact: 'YOUR_CONTACT_FORM_ID',      // e.g. 'xpzvqkla'
  freeTrial: 'YOUR_FREE_TRIAL_FORM_ID', // e.g. 'mwpvqklb'
  newsletter: 'YOUR_NEWSLETTER_FORM_ID', // e.g. 'xkgnqklc'
};

/**
 * Submits a form to Formspree and returns the result.
 * This keeps users on your page (no redirect) and shows a nice message.
 */
export async function submitForm(
  formId: string,
  data: Record<string, string>
): Promise<{ ok: boolean }> {
  try {
    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return { ok: response.ok };
  } catch {
    return { ok: false };
  }
}
