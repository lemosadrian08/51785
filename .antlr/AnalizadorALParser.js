// Generated from AnalizadorAL.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import AnalizadorALListener from './AnalizadorALListener.js';
const serializedATN = [4,1,16,78,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,0,1,1,1,1,1,1,1,1,3,1,26,8,1,1,
1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,5,2,36,8,2,10,2,12,2,39,9,2,1,3,5,3,42,8,3,
10,3,12,3,45,9,3,1,4,1,4,3,4,49,8,4,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,
1,6,1,6,1,7,1,7,1,7,5,7,65,8,7,10,7,12,7,68,9,7,1,8,1,8,1,8,1,8,1,8,1,8,
3,8,76,8,8,1,8,0,0,9,0,2,4,6,8,10,12,14,16,0,1,1,0,11,12,75,0,18,1,0,0,0,
2,21,1,0,0,0,4,32,1,0,0,0,6,43,1,0,0,0,8,48,1,0,0,0,10,50,1,0,0,0,12,53,
1,0,0,0,14,61,1,0,0,0,16,75,1,0,0,0,18,19,3,2,1,0,19,20,5,0,0,1,20,1,1,0,
0,0,21,22,5,1,0,0,22,23,5,13,0,0,23,25,5,2,0,0,24,26,3,4,2,0,25,24,1,0,0,
0,25,26,1,0,0,0,26,27,1,0,0,0,27,28,5,3,0,0,28,29,5,4,0,0,29,30,3,6,3,0,
30,31,5,5,0,0,31,3,1,0,0,0,32,37,5,13,0,0,33,34,5,6,0,0,34,36,5,13,0,0,35,
33,1,0,0,0,36,39,1,0,0,0,37,35,1,0,0,0,37,38,1,0,0,0,38,5,1,0,0,0,39,37,
1,0,0,0,40,42,3,8,4,0,41,40,1,0,0,0,42,45,1,0,0,0,43,41,1,0,0,0,43,44,1,
0,0,0,44,7,1,0,0,0,45,43,1,0,0,0,46,49,3,10,5,0,47,49,3,12,6,0,48,46,1,0,
0,0,48,47,1,0,0,0,49,9,1,0,0,0,50,51,3,14,7,0,51,52,5,7,0,0,52,11,1,0,0,
0,53,54,5,8,0,0,54,55,5,9,0,0,55,56,5,10,0,0,56,57,5,2,0,0,57,58,3,14,7,
0,58,59,5,3,0,0,59,60,5,7,0,0,60,13,1,0,0,0,61,66,3,16,8,0,62,63,7,0,0,0,
63,65,3,16,8,0,64,62,1,0,0,0,65,68,1,0,0,0,66,64,1,0,0,0,66,67,1,0,0,0,67,
15,1,0,0,0,68,66,1,0,0,0,69,76,5,13,0,0,70,76,5,14,0,0,71,72,5,2,0,0,72,
73,3,14,7,0,73,74,5,3,0,0,74,76,1,0,0,0,75,69,1,0,0,0,75,70,1,0,0,0,75,71,
1,0,0,0,76,17,1,0,0,0,6,25,37,43,48,66,75];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class AnalizadorALParser extends antlr4.Parser {

    static grammarFileName = "AnalizadorAL.g4";
    static literalNames = [ null, "'function'", "'('", "')'", "'{'", "'}'", 
                            "','", "';'", "'console'", "'.'", "'log'", "'+'", 
                            "'-'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "Identifier", 
                             "Number", "WS", "LINE_COMMENT" ];
    static ruleNames = [ "program", "functionDeclaration", "parameterList", 
                         "functionBody", "statement", "expressionStatement", 
                         "consoleStatement", "expression", "term" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = AnalizadorALParser.ruleNames;
        this.literalNames = AnalizadorALParser.literalNames;
        this.symbolicNames = AnalizadorALParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, AnalizadorALParser.RULE_program);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        this.functionDeclaration();
	        this.state = 19;
	        this.match(AnalizadorALParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionDeclaration() {
	    let localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, AnalizadorALParser.RULE_functionDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this.match(AnalizadorALParser.T__0);
	        this.state = 22;
	        this.match(AnalizadorALParser.Identifier);
	        this.state = 23;
	        this.match(AnalizadorALParser.T__1);
	        this.state = 25;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 24;
	            this.parameterList();
	        }

	        this.state = 27;
	        this.match(AnalizadorALParser.T__2);
	        this.state = 28;
	        this.match(AnalizadorALParser.T__3);
	        this.state = 29;
	        this.functionBody();
	        this.state = 30;
	        this.match(AnalizadorALParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameterList() {
	    let localctx = new ParameterListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, AnalizadorALParser.RULE_parameterList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.match(AnalizadorALParser.Identifier);
	        this.state = 37;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 33;
	            this.match(AnalizadorALParser.T__5);
	            this.state = 34;
	            this.match(AnalizadorALParser.Identifier);
	            this.state = 39;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionBody() {
	    let localctx = new FunctionBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, AnalizadorALParser.RULE_functionBody);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 24836) !== 0)) {
	            this.state = 40;
	            this.statement();
	            this.state = 45;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, AnalizadorALParser.RULE_statement);
	    try {
	        this.state = 48;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	        case 13:
	        case 14:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 46;
	            this.expressionStatement();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 47;
	            this.consoleStatement();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expressionStatement() {
	    let localctx = new ExpressionStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, AnalizadorALParser.RULE_expressionStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.expression();
	        this.state = 51;
	        this.match(AnalizadorALParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	consoleStatement() {
	    let localctx = new ConsoleStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, AnalizadorALParser.RULE_consoleStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.match(AnalizadorALParser.T__7);
	        this.state = 54;
	        this.match(AnalizadorALParser.T__8);
	        this.state = 55;
	        this.match(AnalizadorALParser.T__9);
	        this.state = 56;
	        this.match(AnalizadorALParser.T__1);
	        this.state = 57;
	        this.expression();
	        this.state = 58;
	        this.match(AnalizadorALParser.T__2);
	        this.state = 59;
	        this.match(AnalizadorALParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, AnalizadorALParser.RULE_expression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.term();
	        this.state = 66;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===11 || _la===12) {
	            this.state = 62;
	            _la = this._input.LA(1);
	            if(!(_la===11 || _la===12)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 63;
	            this.term();
	            this.state = 68;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, AnalizadorALParser.RULE_term);
	    try {
	        this.state = 75;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 13:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 69;
	            this.match(AnalizadorALParser.Identifier);
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 70;
	            this.match(AnalizadorALParser.Number);
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 71;
	            this.match(AnalizadorALParser.T__1);
	            this.state = 72;
	            this.expression();
	            this.state = 73;
	            this.match(AnalizadorALParser.T__2);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

AnalizadorALParser.EOF = antlr4.Token.EOF;
AnalizadorALParser.T__0 = 1;
AnalizadorALParser.T__1 = 2;
AnalizadorALParser.T__2 = 3;
AnalizadorALParser.T__3 = 4;
AnalizadorALParser.T__4 = 5;
AnalizadorALParser.T__5 = 6;
AnalizadorALParser.T__6 = 7;
AnalizadorALParser.T__7 = 8;
AnalizadorALParser.T__8 = 9;
AnalizadorALParser.T__9 = 10;
AnalizadorALParser.T__10 = 11;
AnalizadorALParser.T__11 = 12;
AnalizadorALParser.Identifier = 13;
AnalizadorALParser.Number = 14;
AnalizadorALParser.WS = 15;
AnalizadorALParser.LINE_COMMENT = 16;

AnalizadorALParser.RULE_program = 0;
AnalizadorALParser.RULE_functionDeclaration = 1;
AnalizadorALParser.RULE_parameterList = 2;
AnalizadorALParser.RULE_functionBody = 3;
AnalizadorALParser.RULE_statement = 4;
AnalizadorALParser.RULE_expressionStatement = 5;
AnalizadorALParser.RULE_consoleStatement = 6;
AnalizadorALParser.RULE_expression = 7;
AnalizadorALParser.RULE_term = 8;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorALParser.RULE_program;
    }

	functionDeclaration() {
	    return this.getTypedRuleContext(FunctionDeclarationContext,0);
	};

	EOF() {
	    return this.getToken(AnalizadorALParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorALListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorALListener ) {
	        listener.exitProgram(this);
		}
	}


}



class FunctionDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorALParser.RULE_functionDeclaration;
    }

	Identifier() {
	    return this.getToken(AnalizadorALParser.Identifier, 0);
	};

	functionBody() {
	    return this.getTypedRuleContext(FunctionBodyContext,0);
	};

	parameterList() {
	    return this.getTypedRuleContext(ParameterListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorALListener ) {
	        listener.enterFunctionDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorALListener ) {
	        listener.exitFunctionDeclaration(this);
		}
	}


}



class ParameterListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorALParser.RULE_parameterList;
    }

	Identifier = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AnalizadorALParser.Identifier);
	    } else {
	        return this.getToken(AnalizadorALParser.Identifier, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof AnalizadorALListener ) {
	        listener.enterParameterList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorALListener ) {
	        listener.exitParameterList(this);
		}
	}


}



class FunctionBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorALParser.RULE_functionBody;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorALListener ) {
	        listener.enterFunctionBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorALListener ) {
	        listener.exitFunctionBody(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorALParser.RULE_statement;
    }

	expressionStatement() {
	    return this.getTypedRuleContext(ExpressionStatementContext,0);
	};

	consoleStatement() {
	    return this.getTypedRuleContext(ConsoleStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorALListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorALListener ) {
	        listener.exitStatement(this);
		}
	}


}



class ExpressionStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorALParser.RULE_expressionStatement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorALListener ) {
	        listener.enterExpressionStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorALListener ) {
	        listener.exitExpressionStatement(this);
		}
	}


}



class ConsoleStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorALParser.RULE_consoleStatement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorALListener ) {
	        listener.enterConsoleStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorALListener ) {
	        listener.exitConsoleStatement(this);
		}
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorALParser.RULE_expression;
    }

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorALListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorALListener ) {
	        listener.exitExpression(this);
		}
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorALParser.RULE_term;
    }

	Identifier() {
	    return this.getToken(AnalizadorALParser.Identifier, 0);
	};

	Number() {
	    return this.getToken(AnalizadorALParser.Number, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorALListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorALListener ) {
	        listener.exitTerm(this);
		}
	}


}




AnalizadorALParser.ProgramContext = ProgramContext; 
AnalizadorALParser.FunctionDeclarationContext = FunctionDeclarationContext; 
AnalizadorALParser.ParameterListContext = ParameterListContext; 
AnalizadorALParser.FunctionBodyContext = FunctionBodyContext; 
AnalizadorALParser.StatementContext = StatementContext; 
AnalizadorALParser.ExpressionStatementContext = ExpressionStatementContext; 
AnalizadorALParser.ConsoleStatementContext = ConsoleStatementContext; 
AnalizadorALParser.ExpressionContext = ExpressionContext; 
AnalizadorALParser.TermContext = TermContext; 
