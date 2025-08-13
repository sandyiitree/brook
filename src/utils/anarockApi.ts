import CryptoJS from 'crypto-js';
import { parsePhoneNumber } from './phoneUtils';

// Anarock API Configuration
const ANAROCK_API_URL = 'https://lead.anarock.com/api/v0/LandingPage/sync-lead';
const ANAROCK_KEY = '97548e3de8f0d07c'; // This should be in environment variables
const CAMPAIGN_ID = 'amor_landing_page';

export interface LeadData {
  name: string;
  email: string;
  phone: string;
  message?: string;
  interested: string;
}

export interface AnarockResponse {
  success: boolean;
  message: string;
  data?: any;
}

// Generate hash for Anarock API
function generateHash(message: string, key: string): string {
  return CryptoJS.HmacSHA256(message, key).toString();
}

// Submit lead to Anarock API
export async function submitLeadToAnarock(leadData: LeadData): Promise<AnarockResponse> {
  try {
    // Parse phone number
    const phoneData = parsePhoneNumber(leadData.phone);
    
    // Generate hash
    const current_time = Math.floor(Date.now() / 1000);
    const message_for_hash = current_time.toString();
    const hash = generateHash(message_for_hash, ANAROCK_KEY);
    
    // Prepare form data
    const formData = new URLSearchParams({
      name: leadData.name,
      email: leadData.email,
      source: 'google',
      sub_source: 'google_search',
      purpose: 'buy',
      current_time: current_time.toString(),
      phone: phoneData.phone,
      country_code: 'in',
      hash: hash,
      campaign_id: CAMPAIGN_ID
    });
    
    // Add message if provided
    if (leadData.message) {
      formData.append('message', leadData.message);
    }
    
    // Make API call
    const response = await fetch(ANAROCK_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });
    
    const result = await response.json();
    
    if (response.ok) {
      return {
        success: true,
        message: 'Lead submitted successfully',
        data: result
      };
    } else {
      return {
        success: false,
        message: result.message || 'Failed to submit lead',
        data: result
      };
    }
    
  } catch (error) {
    console.error('Error submitting to Anarock:', error);
    return {
      success: false,
      message: 'Network error while submitting lead'
    };
  }
} 