import { ContextDefinition } from "jsonld";

/**
 * =============================================================================
 * Typescript Typings for solidcv
 * =============================================================================
 */

/**
 * CVShape Type
 */
export interface CVShape {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: string;
  /**
   * Defines the persons personal information
   */
  person: PersonShape;
  /**
   * Profile statement
   */
  profileStatement: string;
  /**
   * The persons work experience
   */
  workExperience?: WorkExperienceShape[];
  /**
   * The persons education
   */
  education?: EducationShape[];
  /**
   * The persons skills
   */
  skills?: SkillsShape[];
  /**
   * The persons languages
   */
  languages?: LanguagesShape[];
  /**
   * The persons portfolio
   */
  portfolio?: PortfolioShape[];
  /**
   * The persons hobbies
   */
  hobbies?: HobbyShape[];
}

/**
 * PersonShape Type
 */
export interface PersonShape {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: string;
  /**
   * The persons first name
   */
  firstName: string;
  /**
   * The persons last name
   */
  lastName: string;
  /**
   * The persons date of birth
   */
  dateOfBirth: string;
  /**
   * The persons telephone number
   */
  telephone: string;
  /**
   * The job title of the person
   */
  jobTitle: string;
  /**
   * The persons LinkedIn profile
   */
  linkedInUrl: string;
  /**
   * The persons location
   */
  location: LocationShape;
  /**
   * The persons profile picture
   */
  profilePicture: string;
  /**
   * The persons driving license
   */
  drivingLicense: DrivingLicense;
}

/**
 * WorkExperienceShape Type
 */
export interface WorkExperienceShape {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: string;
  /**
   * The job title of the person
   */
  jobTitle: string;
  /**
   * The start date of the job
   */
  startDate: string;
  /**
   * The end date of the job
   */
  endDate?: string;
  /**
   * The company where the person worked
   */
  location: CompanyShape;
  /**
   * Summary of the job
   */
  summary: string;
  /**
   * The duties of the job
   */
  duties?: DutiesShape[];
}

/**
 * CompanyShape Type
 */
export interface CompanyShape {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: string;
  /**
   * The name of the company
   */
  companyName: string;
  /**
   * The location of the company
   */
  location: LocationShape;
}

/**
 * DutiesShape Type
 */
export interface DutiesShape {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: string;
  /**
   * The duties of the job
   */
  profileStatement: string;
}

/**
 * EducationShape Type
 */
export interface EducationShape {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: string;
  /**
   * The school where the person studied
   */
  school: SchoolShape;
  /**
   * The degree the person has
   */
  degree: DegreeShape;
  /**
   * Experience of the education | Summary of the education
   */
  summary?: (string | string)[];
  /**
   * The start date of the education
   */
  startDate: string;
  /**
   * The end date of the education
   */
  endDate?: string;
  /**
   * The location of the education
   */
  location: LocationShape;
}

/**
 * SchoolShape Type
 */
export interface SchoolShape {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: string;
  /**
   * The name of the school
   */
  companyName: string;
  /**
   * The location of the school
   */
  location: LocationShape;
}

/**
 * SkillsShape Type
 */
export interface SkillsShape {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: string;
  /**
   * The technical skills of the person
   */
  technicalSkills?: TechnicalSkillsShape[];
  /**
   * The soft skills of the person
   */
  softSkills?: string[];
}

/**
 * TechnicalSkillsShape Type
 */
export interface TechnicalSkillsShape {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: string;
  /**
   * The name of the technical skill
   */
  skillName: string;
  /**
   * The level of the technical skill
   */
  level: number;
  /**
   * The favorite technical skill
   */
  isFavorite: boolean;
}

/**
 * LanguagesShape Type
 */
export interface LanguagesShape {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: string;
  /**
   * The name of the language
   */
  languageName: string;
  /**
   * The proficiency of the language
   */
  languageProficiency: LanguageLevelShape;
}

/**
 * PortfolioShape Type
 */
export interface PortfolioShape {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: string;
  /**
   * The title of the portfolio
   */
  portfolioTitle: string;
  /**
   * The description of the portfolio
   */
  portfolioDescription: string;
  /**
   * The link to the portfolio
   */
  portfolioLink?: string;
  /**
   * The highlights of the portfolio
   */
  portfolioHighlights?: HighlightShape[];
}

/**
 * HighlightShape Type
 */
export interface HighlightShape {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: string;
  /**
   * The highlight of the portfolio
   */
  profileStatement: string;
}

/**
 * HobbyShape Type
 */
export interface HobbyShape {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: string;
  /**
   * The hobbies of the person
   */
  profileStatement: string;
}

/**
 * LanguageLevelShape Type
 */
export interface LanguageLevelShape {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: string;
  /**
   * The level of the language
   */
  degreeType:
    | {
        "@id": "BASIC";
      }
    | {
        "@id": "INTERMEDIATE";
      }
    | {
        "@id": "ADVANCED";
      }
    | {
        "@id": "FLUENT";
      }
    | {
        "@id": "NATIVE";
      };
}

/**
 * DegreeShape Type
 */
export interface DegreeShape {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: string;
  /**
   * The degree the person has
   */
  degreeType:
    | {
        "@id": "HIGHSCHOOL";
      }
    | {
        "@id": "POSTGRADUATE";
      }
    | {
        "@id": "PROFESSIONALBACHELOR";
      }
    | {
        "@id": "ACADEMICBACHELOR";
      }
    | {
        "@id": "MASTER";
      }
    | {
        "@id": "PHD";
      };
}

/**
 * DrivingLicense Type
 */
export interface DrivingLicense {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: string;
  /**
   * The type of driving license the person has
   */
  degreeType:
    | {
        "@id": "NA";
      }
    | {
        "@id": "A";
      }
    | {
        "@id": "AM";
      }
    | {
        "@id": "B";
      }
    | {
        "@id": "C";
      }
    | {
        "@id": "D";
      }
    | {
        "@id": "G";
      };
}

/**
 * LocationShape Type
 */
export interface LocationShape {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: string;
  /**
   * The city where the person lives
   */
  addressLocality: string;
  /**
   * The country where the person lives
   */
  addressCountry: string;
}
