// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderWorkshop } from '../render-utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('renderWorkshop', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="workshop"><h3>Prison Abolition For Kids</h3></div>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderWorkshop({
        id: 1,
        name: 'Prison Abolition For Kids',
        participants: [{ name: 'Buster Bluth', contact_info: 'buster@bluthcompany.com' }],
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});






