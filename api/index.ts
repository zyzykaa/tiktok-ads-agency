// 1. Dòng này cực kỳ quan trọng: Ép Vercel mang theo toàn bộ thư mục SSR của Vike
// (Dùng @ts-ignore để TypeScript không báo lỗi gạch đỏ vì file này chỉ có sau khi build)
// @ts-ignore
import '../dist/server/entry.mjs';

import { renderPage } from 'vike/server';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const pageContext = await renderPage({
      urlOriginal: req.url || '/'
    });

    const { httpResponse } = pageContext;

    if (!httpResponse) {
      res.status(404).send('Not found');
      return;
    }

    res.statusCode = httpResponse.statusCode;

    httpResponse.headers.forEach(([name, value]: [string, string]) => {
      res.setHeader(name, value);
    });

    res.send(httpResponse.body);
    
  } catch (error) {
    // 2. Nếu code bị lỗi, nó sẽ in thẳng ra Vercel Logs thay vì ẩn đi
    console.error('🔥 Lỗi Vike SSR:', error);
    res.status(500).send('Internal Server Error. Vui long xem Vercel Logs de biet chi tiet.');
  }
}
