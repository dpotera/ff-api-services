import { APIClient, APIMapping } from '../../http';
import { CompanyServiceTypes } from './CompanyService.Types';

export class InternalController extends APIClient {
    constructor() {
        super(APIMapping.companyService);
    }

    /**
     * start trial
     * @param companyId
     */
    async startTrial(companyId: CompanyServiceTypes.ID) {
        return this.invokeApiWithErrorHandling(`/internal/company/${companyId}/startTrial`, 'PUT');
    }

    /**
     * end trial
     * @param companyId
     */
    async endTrial(companyId: CompanyServiceTypes.ID) {
        return this.invokeApiWithErrorHandling(`/internal/company/${companyId}/endTrial`, 'PUT');
    }

    /**
     * Gets the details of a company group.
     */
    async fetchGroup(name: string) {
        return this.invokeApiWithErrorHandling<CompanyServiceTypes.CompanyGroup>(`/internal/company/groups/${name}`);
    }
}
