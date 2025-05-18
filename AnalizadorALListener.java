// Generated from AnalizadorAL.g4 by ANTLR 4.13.2
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link AnalizadorALParser}.
 */
public interface AnalizadorALListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link AnalizadorALParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(AnalizadorALParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorALParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(AnalizadorALParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link AnalizadorALParser#functionDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterFunctionDeclaration(AnalizadorALParser.FunctionDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorALParser#functionDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitFunctionDeclaration(AnalizadorALParser.FunctionDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link AnalizadorALParser#parameterList}.
	 * @param ctx the parse tree
	 */
	void enterParameterList(AnalizadorALParser.ParameterListContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorALParser#parameterList}.
	 * @param ctx the parse tree
	 */
	void exitParameterList(AnalizadorALParser.ParameterListContext ctx);
	/**
	 * Enter a parse tree produced by {@link AnalizadorALParser#functionBody}.
	 * @param ctx the parse tree
	 */
	void enterFunctionBody(AnalizadorALParser.FunctionBodyContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorALParser#functionBody}.
	 * @param ctx the parse tree
	 */
	void exitFunctionBody(AnalizadorALParser.FunctionBodyContext ctx);
	/**
	 * Enter a parse tree produced by {@link AnalizadorALParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(AnalizadorALParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorALParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(AnalizadorALParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link AnalizadorALParser#expressionStatement}.
	 * @param ctx the parse tree
	 */
	void enterExpressionStatement(AnalizadorALParser.ExpressionStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorALParser#expressionStatement}.
	 * @param ctx the parse tree
	 */
	void exitExpressionStatement(AnalizadorALParser.ExpressionStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link AnalizadorALParser#consoleStatement}.
	 * @param ctx the parse tree
	 */
	void enterConsoleStatement(AnalizadorALParser.ConsoleStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorALParser#consoleStatement}.
	 * @param ctx the parse tree
	 */
	void exitConsoleStatement(AnalizadorALParser.ConsoleStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link AnalizadorALParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterExpression(AnalizadorALParser.ExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorALParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitExpression(AnalizadorALParser.ExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link AnalizadorALParser#term}.
	 * @param ctx the parse tree
	 */
	void enterTerm(AnalizadorALParser.TermContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorALParser#term}.
	 * @param ctx the parse tree
	 */
	void exitTerm(AnalizadorALParser.TermContext ctx);
}