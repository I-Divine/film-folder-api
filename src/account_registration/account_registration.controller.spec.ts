import { Test, TestingModule } from '@nestjs/testing';
import { AccountRegistrationController } from './account_registration.controller';
import { AccountRegistrationService } from './account_registration.service';

describe('AccountRegistrationController', () => {
  let controller: AccountRegistrationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountRegistrationController],
      providers: [AccountRegistrationService],
    }).compile();

    controller = module.get<AccountRegistrationController>(AccountRegistrationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
