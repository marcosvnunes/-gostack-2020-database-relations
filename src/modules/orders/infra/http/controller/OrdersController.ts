import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateOrderService from '@modules/orders/services/CreateOrderService';
import FindOrderService from '@modules/orders/services/FindOrderService';

export default class OrdersController {
  public async show(request: Request, response: Response): Promise<Response> {
    const findOrder = container.resolve(FindOrderService);
    const order = await findOrder.execute(request.body);

    return response.json(order);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const createOrder = container.resolve(CreateOrderService);
    const order = await createOrder.execute(request.body);

    return response.json(order);
  }
}
