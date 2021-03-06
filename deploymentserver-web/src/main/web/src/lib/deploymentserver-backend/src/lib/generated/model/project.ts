/**
 * DeploymentService
 * DeploymentService API automatically generated
 *
 * OpenAPI spec version: 1.0.0
 * Contact: viggo@effectivecode.se
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { URL } from './uRL';


/**
 * Information about a project
 */
export interface Project { 
    branches?: Array<string>;
    checkedOutBranch?: string;
    dbPing?: URL;
    gitAbsolutePath?: string;
    gitDirectory?: any;
    gitURL: URL;
    name?: string;
    ping?: URL;
    pingDbStatus?: string;
    pingStatus?: string;
    repoName?: string;
    version?: string;
}
