import intlTelInput from 'intl-tel-input'

export default defineNuxtPlugin(() => {
  const setupIntlTelInput = () => {
    window.intlTelInput = intlTelInput;

    console.log('intlTelInput', intlTelInput);
  };
  
  setupIntlTelInput();

})