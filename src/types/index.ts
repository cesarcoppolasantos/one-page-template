export interface FormData {
  plan: string;
  signerName: string;
  isAnonymous: boolean;
  recipientName: string;
  email: string;
  image: File | null;
  text: string;
}

export interface Plan {
  name: string;
  price: string;
  period: string;
  features: string[];
  mostChosen?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface MenuItem {
  name: string;
  href: string;
} 