const isVisible = ({ pageNumber, pages }) => !pages.includes(pageNumber);

const getPageNumber = ({ data: { pageNumber, totalPages }, format = 'c/t' }) =>
	format.replace('c', pageNumber).replace('t', totalPages);

const PageManager = { isVisible, getPageNumber };

export default PageManager;
