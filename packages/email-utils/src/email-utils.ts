import { EmailUtilsProps } from "./types";

const DISPOSABLE_DOMAINS = [
  "mailinator.com",
  "10minutemail.com",
  "trashmail.com",
];

export function isEmailValid({ email }: EmailUtilsProps): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.toLowerCase());
}

export function normalizeEmail({ email }: EmailUtilsProps): string {
  return email.trim().toLowerCase();
}

export function isDisposableEmail({ email }: EmailUtilsProps): boolean {
  const domain = email.split("@")[1].toLowerCase();
  return DISPOSABLE_DOMAINS.includes(domain);
}
