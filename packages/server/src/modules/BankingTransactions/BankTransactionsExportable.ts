import { Injectable, Global, Inject } from '@nestjs/common';
import { Exportable } from '../Export/Exportable';
import { EXPORT_SIZE_LIMIT } from '../Export/constants';
import { ExportableService } from '../Export/decorators/ExportableModel.decorator';
import { BankTransaction } from './models/BankTransaction';
import { TenantModelProxy } from '../System/models/TenantBaseModel';

@Injectable()
@ExportableService({ name: BankTransaction.name })
@Global()
export class BankTransactionsExportable extends Exportable {
  constructor(
    @Inject(BankTransaction.name)
    private readonly bankTransactionModel: TenantModelProxy<typeof BankTransaction>,
  ) {
    super();
  }

  /**
   * Retrieves the bank transactions data to export.
   * Note: Exports only published/categorized transactions.
   */
  public async exportable(query: any) {
    const transactions = await this.bankTransactionModel()
      .query()
      .whereNotNull('publishedAt')
      .orderBy('date', 'DESC')
      .limit(EXPORT_SIZE_LIMIT);
    
    return transactions;
  }
}
