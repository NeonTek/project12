import { Component } from 'react';
import './App.css';


marked.setOptions({
    breaks: true,
});
class MarkdownPreviewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: `
# MarkDown Preview

## Fun Facts About Coding

1. **Simple Yet Powerful:** HTML (HyperText Markup Language) is the standard language used to create and design web pages. Despite its simplicity, it forms the backbone of the web.
2. **Not Really a Programming Language:** Unlike JavaScript, Python, or Java, HTML is not technically a programming language. It's a markup language used to structure content on the web.
3. **Back to 1990:** HTML was first proposed by Tim Berners-Lee in 1990 while working at CERN, the European Organization for Nuclear Research. It has come a long way since then!
4. **The Building Blocks:** HTML uses a series of elements (tags) to define the structure of a web page, such as headings (\`<h1>\` to \`<h6>\`), paragraphs (\`<p>\`), and lists (\`<ul>\`, \`<ol>\`, \`<li>\`).
5. **Accessibility Matters:** HTML has evolved to include features for web accessibility, such as semantic elements (\`<header>\`, \`<footer>\`, \`<nav>\`, \`<main>\`, \`<article>\`, \`<section>\`) that help screen readers and search engines understand the content better.
6. **Global Language:** HTML is used worldwide, and its specifications are maintained by the World Wide Web Consortium (W3C), ensuring its compatibility and consistency across different platforms and browsers.
7. **Endless Learning:** Despite its simplicity, HTML is constantly evolving, with new features and standards being introduced regularly. Staying updated with the latest trends and best practices is key for web developers.
8. **Building Blocks of the Web:** HTML, along with CSS (Cascading Style Sheets) for styling and JavaScript for interactivity, forms the core technologies of the World Wide Web.
9. **Cross-Platform Compatibility:** One of the strengths of HTML is its ability to create web pages that work seamlessly across different devices and platforms, from desktop computers to smartphones and tablets.
10. **Fun Fact:** The opening tag for HTML is \`<html>\` and the closing tag is \`</html>\`, representing the start and end of an HTML document.

# This is a HTML syntax (H1 size)
## This is a Sub Header (H2 size)
[This is a Link](https://example.com)
This is an example of \`Inline Code\`
\`\`\`
const greeting = 'Hello, world!';
\`\`\`
- This is a List Item
> This is a Blockquote
![Placeholder Image](/src/assets/react.svg)
**This is Bolded Text**
`
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({ markdown: event.target.value });
    }

    render() {
        const { markdown } = this.state;
        return (
            <div style={{ width: '100vw' }} className="text-center">
                <textarea
                    id="editor"
                    value={this.state.markdown}
                    onChange={this.handleInputChange}
                    placeholder="Enter Markdown"
                    className="form-control-lg col-8 text-left"
                    rows="8"
                />
                <div id="preview" className="previewer" dangerouslySetInnerHTML={{ __html: marked(markdown) }}></div>
            </div>
        );
    }
}

export default MarkdownPreviewer;
