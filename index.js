import antlr4 from 'antlr4';
import fs from 'fs';
import AnalizadorALLexer from './AnalizadorALLexer.js';
import AnalizadorALParser from './AnalizadorALParser.js';

class ErrorIgnorer extends antlr4.error.ErrorListener {
  syntaxError() {}
}

const input = fs.readFileSync('input.txt', 'utf8');
const chars = new antlr4.InputStream(input);
const lexer = new AnalizadorALLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new AnalizadorALParser(tokens);

parser.removeErrorListeners();
parser.addErrorListener(new ErrorIgnorer());

parser.buildParseTrees = true;
const tree = parser.program();

function walk(node) {
  if (!node.children) return;
  for (const child of node.children) walk(child);
}
walk(tree);