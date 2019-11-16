(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{288:function(t,s,a){"use strict";a.r(s);var e=a(16),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"sql-注入器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-注入器","aria-hidden":"true"}},[t._v("#")]),t._v(" Sql 注入器")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("注入器配置")]),t._v(" "),a("p",[t._v("全局配置 "),a("code",[t._v("sqlInjector")]),t._v(" 用于注入 "),a("code",[t._v("ISqlInjector")]),t._v(" 接口的子类，实现自定义方法注入。")]),t._v(" "),a("p",[t._v("参考默认注入器 "),a("a",{attrs:{href:"https://gitee.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-core/src/main/java/com/baomidou/mybatisplus/core/injector/DefaultSqlInjector.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("DefaultSqlInjector"),a("OutboundLink")],1)])]),t._v(" "),a("ul",[a("li",[t._v("SQL 自动注入器接口 "),a("code",[t._v("ISqlInjector")])])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ISqlInjector")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("/**\n     * <p>\n     * 检查SQL是否注入(已经注入过不再注入)\n     * </p>\n     *\n     * @param builderAssistant mapper 信息\n     * @param mapperClass      mapper 接口的 class 对象\n     */")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("inspectInject")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MapperBuilderAssistant builderAssistant"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Class"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" mapperClass"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("自定义自己的通用方法可以实现接口 "),a("code",[t._v("ISqlInjector")]),t._v(" 也可以继承抽象类  "),a("code",[t._v("AbstractSqlInjector")]),t._v(" 注入通用方法 "),a("code",[t._v("SQL 语句")]),t._v(" 然后继承 "),a("code",[t._v("BaseMapper")]),t._v(" 添加自定义方法，全局配置 "),a("code",[t._v("sqlInjector")]),t._v(" 注入 MP 会自动将类所有方法注入到 "),a("code",[t._v("mybatis")]),t._v(" 容器中。")]),t._v(" "),a("blockquote",[a("p",[t._v("参考"),a("a",{attrs:{href:"https://gitee.com/baomidou/mybatis-plus-samples/tree/master/mybatis-plus-sample-deluxe",target:"_blank",rel:"noopener noreferrer"}},[t._v("自定义BaseMapper示例"),a("OutboundLink")],1),t._v(")")])])])},[],!1,null,null,null);n.options.__file="sql-injector.md";s.default=n.exports}}]);