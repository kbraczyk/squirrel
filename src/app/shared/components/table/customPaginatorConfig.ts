import { MatPaginatorIntl } from '@angular/material';

export function CustomPaginator() {
  const squirelPaginator = new MatPaginatorIntl();

  squirelPaginator.itemsPerPageLabel = 'Elementów na stronie:';
  squirelPaginator.nextPageLabel = 'Następna strona';
  squirelPaginator.previousPageLabel = 'Poprzednia strona';
  squirelPaginator.firstPageLabel = 'Pierwsza strona';
  squirelPaginator.lastPageLabel = 'Ostatnia strona';
  return squirelPaginator;
}
