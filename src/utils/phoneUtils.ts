export interface PhoneData {
    country_code: string;
    phone: string;
  }
  
  export function parsePhoneNumber(phone: string): PhoneData {
    // Remove all non-digit characters
    const cleanPhone = phone.replace(/\D/g, '');
    
    // For Indian numbers, assume +91 if not provided
    if (cleanPhone.length === 10) {
      return {
        country_code: 'IN',
        phone: cleanPhone
      };
    } else if (cleanPhone.length === 12 && cleanPhone.startsWith('91')) {
      return {
        country_code: 'IN',
        phone: cleanPhone.substring(2)
      };
    } else if (cleanPhone.length === 13 && cleanPhone.startsWith('+91')) {
      return {
        country_code: 'IN',
        phone: cleanPhone.substring(3)
      };
    }
    
    // Default fallback
    return {
      country_code: 'IN',
      phone: cleanPhone
    };
  }
  
  export function formatPhoneNumber(phone: string): string {
    const phoneData = parsePhoneNumber(phone);
    return `+91 ${phoneData.phone}`;
  }
  
  export function validatePhoneNumber(phone: string): boolean {
    const phoneData = parsePhoneNumber(phone);
    return phoneData.phone.length === 10;
  } 