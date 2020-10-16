describe('Form App', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3001/order-form');
	});

	//helpers
	// get name input
	const nameInput = () => cy.get('input[name=name]');
	// get email input
	const sausageCheckbox = () => cy.get('input[name=sausage]');
	// get password input
	const onionsCheckbox = () => cy.get('input[name=onions]');
	// get submit button
	const submitBtn = () => cy.get('button');

	//tests
	it('sanity checks', () => {
		expect(5).to.equal(5);
	});

	it('name tests', () => {
		// check if name input exists
		nameInput().should('exist');
		// type name into name input
		nameInput().type('Jake Grella');
		// check if text input contains name provided
		nameInput().should('have.value', 'Jake Grella');
	});

	it('sausage checkbox tests', () => {
		// check if sausage box exists
		sausageCheckbox().should('exist');
		// check if sausage box is checkable
		sausageCheckbox().click();
	});

	it('onions checkbox tests', () => {
		// check if onions box exists
		onionsCheckbox().should('exist');
		// check if onions box is checkable
		onionsCheckbox().click();
	});

	it('submit button tests', () => {
		// check if submit button exists
		submitBtn().should('exist');
		// check if user can submit form (submit button should be disabled)
		submitBtn().should('be.disabled');
	});
});
