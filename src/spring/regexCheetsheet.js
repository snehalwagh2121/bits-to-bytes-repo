import React from 'react';
import '../springsec/basics.css';
function SpringRegex() {
    return (
        <div className='main-page'>
            <div className="page-heading">REGEX CHEATSHEET</div>
            <div className='page-content'>
                <div className='section-content'>
                    <table className='tableDiv'>
                        <tr>
                            <td>[abc]</td>
                            <td>Find one character from the options between the brackets</td>
                        </tr>
                        <tr>
                            <td>[^abc]</td>
                            <td>Find one character NOT between the brackets</td>
                        </tr>
                        <tr>
                            <td>[0-9]</td>
                            <td>Find one character from the range 0 to 9</td>
                        </tr>
                    </table>
                </div>
                <div className='section-content'>
                    <div className='heading-3'>METACHARACTERS</div>
                    <table className='tableDiv'>
                        <tr>
                            <td>|</td>
                            <td>Find a match for any one of the patterns separated by | as in: cat|dog|fish</td>
                        </tr>
                        <tr>
                            <td>.</td>
                            <td>Find just one instance of any character</td>
                        </tr>
                        <tr>
                            <td>^</td>
                            <td>Finds a match as the beginning of a string as in: ^Hello</td>
                        </tr>
                        <tr>
                            <td>$</td>
                            <td>Finds a match at the end of the string as in: World$</td>
                        </tr>
                        <tr>
                            <td>\d</td>
                            <td>Find a digit</td>
                        </tr>
                        <tr>
                            <td>\s</td>
                            <td>Find a whitespace character</td>
                        </tr>
                        <tr>
                            <td>\b</td>
                            <td>Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b</td>
                        </tr>
                        <tr>
                            <td>\uxxxx</td>
                            <td>Find the Unicode character specified by the hexadecimal number xxxx</td>
                        </tr>
                    </table>    
                </div>
                <div className='section-content'>
                    <div className='heading-3'>QUANTIFIERS</div>
                    <table className='tableDiv'>
                        <tr>
                            <td>n+</td>
                            <td>Matches any string that contains at least one n</td>
                        </tr>
                        <tr>
                            <td>n*</td>
                            <td>Matches any string that contains zero or more occurrences of n</td>
                        </tr>
                        <tr>
                            <td>n?</td>
                            <td>Matches any string that contains zero or one occurrences of n</td>
                        </tr>
                        <tr>
                            <td>n{'{x}'}</td>
                            <td>Matches any string that contains a sequence of X n's</td>
                        </tr>
                        <tr>
                            <td>n{'{x,y}'}</td>
                            <td>Matches any string that contains a sequence of X to Y n's</td>
                        </tr>
                        <tr>
                            <td><code>n{'{x,}'}</code></td>
                            <td>Matches any string that contains a sequence of at least X n's</td>
                        </tr>
                        
                    </table>    
                </div>
            </div>
        </div>
        );
}

export default SpringRegex;