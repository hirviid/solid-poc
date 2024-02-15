import { ContextDefinition } from "jsonld";

/**
 * =============================================================================
 * solidcvContext: JSONLD Context for solidcv
 * =============================================================================
 */
export const solidcvContext: ContextDefinition = {
  type: {
    "@id": "@type",
    "@type": [
      "http://xmlns.com/foaf/0.1/Document",
      "http://xmlns.com/foaf/0.1/Person",
      "http://schema.org/Place",
      "http://schema.org/Text",
      "http://schema.org/Organization",
    ],
  },
  person: {
    "@id": "http://schema.org/person",
    "@type": "@id",
  },
  firstName: {
    "@id": "http://schema.org/givenName",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  lastName: {
    "@id": "http://schema.org/familyName",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  dateOfBirth: {
    "@id": "http://schema.org/birthDate",
    "@type": "http://www.w3.org/2001/XMLSchema#date",
  },
  telephone: {
    "@id": "http://schema.org/telephone",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  jobTitle: {
    "@id": "http://schema.org/jobTitle",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  linkedInUrl: {
    "@id": "http://schema.org/url",
    "@type": "http://www.w3.org/2001/XMLSchema#anyURI",
  },
  location: {
    "@id": "http://schema.org/location",
    "@type": "@id",
  },
  addressLocality: {
    "@id": "http://schema.org/addressLocality",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  addressCountry: {
    "@id": "http://schema.org/addressCountry",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  profilePicture: {
    "@id": "http://schema.org/image",
    "@type": "http://www.w3.org/2001/XMLSchema#anyURI",
  },
  drivingLicense: {
    "@id": "http://schema.org/drivingLicense",
    "@type": "@id",
  },
  degreeType: {
    "@id": "http://www.w3.org/2001/XMLSchema#string",
  },
  NA: "http://example.org/NA",
  A: "http://example.org/A",
  AM: "http://example.org/AM",
  B: "http://example.org/B",
  C: "http://example.org/C",
  D: "http://example.org/D",
  G: "http://example.org/G",
  profileStatement: {
    "@id": "http://schema.org/Text",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  workExperience: {
    "@id": "http://schema.org/workExperience",
    "@type": "@id",
    "@container": "@set",
  },
  startDate: {
    "@id": "http://schema.org/startDate",
    "@type": "http://www.w3.org/2001/XMLSchema#date",
  },
  endDate: {
    "@id": "http://schema.org/endDate",
    "@type": "http://www.w3.org/2001/XMLSchema#date",
  },
  companyName: {
    "@id": "http://schema.org/name",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  summary: {
    "@id": "http://schema.org/description",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  duties: {
    "@id": "http://schema.org/duties",
    "@type": "@id",
    "@container": "@set",
  },
  education: {
    "@id": "http://schema.org/education",
    "@type": "@id",
    "@container": "@set",
  },
  school: {
    "@id": "http://schema.org/Organization",
    "@type": "@id",
  },
  degree: {
    "@id": "http://schema.org/degree",
    "@type": "@id",
  },
  HIGHSCHOOL: "http://example.org/HIGH_SCHOOL",
  POSTGRADUATE: "http://example.org/POST_GRADUATE",
  PROFESSIONALBACHELOR: "http://example.org/PROFESSIONAL_BACHELOR",
  ACADEMICBACHELOR: "http://example.org/ACADEMIC_BACHELOR",
  MASTER: "http://example.org/MASTER",
  PHD: "http://example.org/PHD",
  skills: {
    "@id": "http://schema.org/skills",
    "@type": "@id",
    "@container": "@set",
  },
  technicalSkills: {
    "@id": "http://schema.org/technicalSkills",
    "@type": "@id",
    "@container": "@set",
  },
  skillName: {
    "@id": "http://schema.org/skillName",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  level: {
    "@id": "http://schema.org/level",
    "@type": "http://www.w3.org/2001/XMLSchema#integer",
  },
  isFavorite: {
    "@id": "http://schema.org/isFavorite",
    "@type": "http://www.w3.org/2001/XMLSchema#boolean",
  },
  softSkills: {
    "@id": "http://schema.org/softSkills",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@container": "@set",
  },
  languages: {
    "@id": "http://schema.org/languages",
    "@type": "@id",
    "@container": "@set",
  },
  languageName: {
    "@id": "http://schema.org/languageName",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  languageProficiency: {
    "@id": "http://schema.org/languageLevel",
    "@type": "@id",
  },
  BASIC: "http://example.org/BASIC",
  INTERMEDIATE: "http://example.org/INTERMEDIATE",
  ADVANCED: "http://example.org/ADVANCED",
  FLUENT: "http://example.org/FLUENT",
  NATIVE: "http://example.org/NATIVE",
  portfolio: {
    "@id": "http://schema.org/portfolio",
    "@type": "@id",
    "@container": "@set",
  },
  portfolioTitle: {
    "@id": "http://schema.org/title",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  portfolioDescription: {
    "@id": "http://schema.org/portfolioDescription",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  portfolioLink: {
    "@id": "http://schema.org/portfolioLink",
    "@type": "http://www.w3.org/2001/XMLSchema#anyURI",
  },
  portfolioHighlights: {
    "@id": "http://schema.org/highlight",
    "@type": "@id",
    "@container": "@set",
  },
  hobbies: {
    "@id": "http://schema.org/hobbies",
    "@type": "@id",
    "@container": "@set",
  },
};
