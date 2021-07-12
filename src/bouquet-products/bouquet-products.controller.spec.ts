import { Test, TestingModule } from '@nestjs/testing';
import { BouquetProductsController } from './bouquet-products.controller';

describe('BouquetProductsController', () => {
  let controller: BouquetProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BouquetProductsController],
    }).compile();

    controller = module.get<BouquetProductsController>(BouquetProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
