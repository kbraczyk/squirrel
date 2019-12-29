import { MatPaginatorIntl } from '@angular/material';

export function CustomPaginator() {
  const squirelPaginator = new MatPaginatorIntl();

  squirelPaginator.itemsPerPageLabel = 'Produktów na stronie:';
  squirelPaginator.nextPageLabel = 'Następna strona';
  squirelPaginator.previousPageLabel = 'Poprzednia strona';
  squirelPaginator.firstPageLabel = 'Pierwsza strona';
  squirelPaginator.lastPageLabel = 'Ostatnia strona';
  return squirelPaginator;
}
