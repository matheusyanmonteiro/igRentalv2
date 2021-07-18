import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

// const categoriesRepository = CategoriesRepository.getInstance();
const categoriesRepository = null;

const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);

const listcategoriesController = new ListCategoriesController(
  listCategoriesUseCase
);

export { listcategoriesController };
