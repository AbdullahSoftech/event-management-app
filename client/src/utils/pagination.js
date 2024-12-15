export const paginate = (items, currentPage, itemsPerPage) => {
    const startIndex = Math.max((currentPage - 1) * itemsPerPage);
    return items.slice(startIndex, startIndex + itemsPerPage);
};
  