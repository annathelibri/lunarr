import { Controller, Post } from '@/app/controllers';
import { Request, Response } from 'express';

@Controller({ path: '/api/webhooks' })
export class WebhooksController {
  @Post('/jellyfin')
  async jellyfin(req: Request, res: Response) {

  }
}
