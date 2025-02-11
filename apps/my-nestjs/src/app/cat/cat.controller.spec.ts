import { Test, TestingModule } from '@nestjs/testing';
import { CatController } from './cat.controller';

// curl -X POST http://localhost:3000/api/cat -H "Content-Type: application/json" --data '{"name":"xyz","breed":"xyz","age":3}'
// curl -X POST http://localhost:3000/api/cat \
//      -H "Content-Type: application/json" \
//      -d '{
//   "message": {
//     "data": "eyJpZCI6ICIxMjM0IiwgInNwZWN2ZXJzaW9uIjogIjEuMCIsICJ0eXBlIjogImNvbS5nb29nbGUuY2xvdWQucHVic3ViLnRvcGljLnB1Ymxpc2giLCAic291cmNlIjogIi8vcHVic3ViLmdvb2dsZWFwaXMuY29tL3Byb2plY3RzL215LXByb2plY3QvdG9waWNzL215LXRvcGljIiwgInRpbWUiOiAiMjAyNC0wMi0xMVQxMjozNDo1NloiLCAiZGF0YSI6IHsibmFtZSI6ICJXaGlza2VycyIsICJhZ2UiOiAzLCAiYnJlZWQiOiAiU2lhbWVzZSJ9fQ==",
//     "messageId": "9876543210",
//     "publishTime": "2024-02-11T12:34:56Z"
//   }
// }'

// Test SiamseDto
// curl -X POST http://localhost:3000/api/cat/fluffy \
//      -H "Content-Type: application/json" \
//      -d '{
//   "message": {
//     "data": "eyJpZCI6ICIxMjM0IiwgInNwZWN2ZXJzaW9uIjogIjEuMCIsICJ0eXBlIjogInNpYW1lc2UiLCAic291cmNlIjogIi8vcHVic3ViLmdvb2dsZWFwaXMuY29tL3Byb2plY3RzL215LXByb2plY3QvdG9waWNzL215LXRvcGljIiwgInRpbWUiOiAiMjAyNC0wMi0xMVQxMjozNDo1NloiLCAiZGF0YSI6IHsibmFtZSI6ICJXaGlza2VycyIsICJhZ2UiOiAzLCAiYnJlZWQiOiAiU2lhbWVzZSIsICJ2YXJpYW50IjogImxvbmcgaGFpciJ9fQ==",
//     "messageId": "9876543210",
//     "publishTime": "2024-02-11T12:34:56Z"
//   }
// }'

// Test RagDollDto
// curl -X POST http://localhost:3000/api/cat/fluffy \
//      -H "Content-Type: application/json" \
//      -d '{
//   "message": {
//     "data": "eyJpZCI6ICIxMjM0IiwgInNwZWN2ZXJzaW9uIjogIjEuMCIsICJ0eXBlIjogInJhZ2RvbGwiLCAic291cmNlIjogIi8vcHVic3ViLmdvb2dsZWFwaXMuY29tL3Byb2plY3RzL215LXByb2plY3QvdG9waWNzL215LXRvcGljIiwgInRpbWUiOiAiMjAyNC0wMi0xMVQxMjozNDo1NloiLCAiZGF0YSI6IHsibmFtZSI6ICJXaGlza2VycyIsICJhZ2UiOiAzLCAiYnJlZWQiOiAicmFnZG9sbCIsICJmdXJDb2xvciI6ICJ3aGl0ZSJ9fQ==",
//     "messageId": "9876543210",
//     "publishTime": "2024-02-11T12:34:56Z"
//   }
// }'
describe('CatController', () => {
  let controller: CatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatController],
    }).compile();

    controller = module.get<CatController>(CatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
