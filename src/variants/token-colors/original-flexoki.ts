import { FlexokiColorsObject } from "../data";

export const originalFlexokiTokenColors = [
  {
    scope: ["comment"],
    settings: {
      foreground: FlexokiColorsObject["tx-2"],
    },
  },
  {
    scope: [
      "comment.block.documentation",
      "comment.block.documentation variable.other",
    ],
    settings: {
      foreground: FlexokiColorsObject["tx-2"],
      fontStyle: "italic",
    },
  },
  {
    scope: ["comment.block.documentation entity.name.type"],
    settings: {
      foreground: FlexokiColorsObject["tx"],
    },
  },
  {
    scope: ["comment.block.documentation storage.type"],
    settings: {
      foreground: FlexokiColorsObject["tx-2"],
      fontStyle: "italic",
    },
  },
  {
    scope: ["string", "punctuation.definition.string.template"],
    settings: {
      foreground: FlexokiColorsObject["cy-2"],
    },
  },
  {
    scope: "constant.numeric",
    settings: {
      foreground: FlexokiColorsObject["pu-2"],
    },
  },
  {
    scope: "constant.language",
    settings: {
      foreground: FlexokiColorsObject["ye-2"],
    },
  },
  {
    scope: ["constant.character", "constant.other"],
    settings: {
      foreground: FlexokiColorsObject["cy-2"],
    },
  },
  {
    scope: "variable.language.this",
    settings: {
      foreground: FlexokiColorsObject["ma-2"],
    },
  },
  {
    scope: ["keyword.control", "keyword.operator.new"],
    settings: {
      foreground: FlexokiColorsObject["gr-2"],
    },
  },
  {
    scope: ["keyword.control.as"],
    settings: {
      foreground: FlexokiColorsObject["tx"],
    },
  },
  {
    scope: [
      "keyword",
      "keyword.operator.less",
      "keyword.control.import",
      "keyword.control.from",
    ],
    settings: {
      foreground: FlexokiColorsObject["re-2"],
    },
  },
  {
    scope: ["variable.other.object"],
    settings: {
      foreground: FlexokiColorsObject["gr-2"],
    },
  },
  {
    scope: ["meta.tag.without-attributes.js.jsx"],
    settings: {
      foreground: FlexokiColorsObject["tx"],
    },
  },
  {
    scope: ["variable.other.object.property"],
    settings: {
      foreground: FlexokiColorsObject["tx"],
    },
  },
  {
    scope: ["variable.other.readwrite"],
    settings: {
      foreground: FlexokiColorsObject["tx"],
    },
  },
  {
    scope: ["storage.modifier"],
    settings: {
      foreground: FlexokiColorsObject["bl-2"],
    },
  },
  {
    scope: "keyword.operator",
    settings: {
      foreground: FlexokiColorsObject["tx"],
      fontStyle: "",
    },
  },
  {
    scope: ["punctuation", "meta.brace"],
    settings: {
      foreground: FlexokiColorsObject["tx-2"],
    },
  },
  {
    scope: "punctuation.definition.comment",
    settings: {
      foreground: FlexokiColorsObject["tx-2"],
      fontStyle: "",
    },
  },
  {
    scope: "punctuation.definition.tag",
    settings: {
      foreground: FlexokiColorsObject["tx-2"],
      fontStyle: "",
    },
  },
  {
    scope: "string.quoted punctuation.definition.string",
    settings: {
      foreground: FlexokiColorsObject["cy-2"],
      fontStyle: "",
    },
  },
  {
    scope: ["string.regexp", "string.regexp punctuation.definition.string"],
    settings: {
      foreground: FlexokiColorsObject["cy-2"],
      fontStyle: "",
    },
  },
  {
    scope: "storage",
    settings: {
      foreground: FlexokiColorsObject["ma-2"],
      fontStyle: "",
    },
  },
  {
    scope: "storage.type",
    settings: {
      foreground: FlexokiColorsObject["bl-2"],
    },
  },
  {
    scope: "storage.type.class",
    settings: {
      foreground: FlexokiColorsObject["bl-2"],
    },
  },
  {
    scope: "entity.name.class",
    settings: {
      foreground: FlexokiColorsObject["bl-2"],
      fontStyle: "underline",
    },
  },
  {
    scope: ["meta.require", "support.function.any-method", "variable.function"],
    settings: {
      foreground: FlexokiColorsObject["tx"],
    },
  },
  {
    scope: [
      "meta.definition.method",
      "entity.name.function.js.jsx",
      "entity.name.function.tsx",
    ],
    settings: {
      foreground: FlexokiColorsObject["or-2"],
    },
  },
  {
    scope: ["entity.name.function"],
    settings: {
      foreground: FlexokiColorsObject["or-2"],
    },
  },
  {
    scope: ["entity.name.function.js", "entity.name.function.ts"],
    settings: {
      foreground: FlexokiColorsObject["or-2"],
    },
  },
  {
    scope: [
      "keyword.operator.assignment",
      "keyword.operator.arithmetic",
      "keyword.operator.bitwise",
      "keyword.operator.relational",
      "keyword.operator.increment",
      "keyword.operator.decrement",
      "keyword.operator.logical",
      "keyword.operator.comparison",
      "keyword.operator.ternary",
      "keyword.operator.expression",
    ],
    settings: {
      foreground: FlexokiColorsObject["re-2"],
    },
  },
  {
    scope: "variable.parameter",
    settings: {
      foreground: FlexokiColorsObject["tx"],
      fontStyle: "",
    },
  },
  {
    scope: ["source.css.scss", "source.css"],
    settings: {
      foreground: FlexokiColorsObject["cy-2"],
      fontStyle: "",
    },
  },
  {
    scope: ["entity.other.attribute-name"],
    settings: {
      foreground: FlexokiColorsObject["ye-2"],
      fontStyle: "",
    },
  },
  {
    scope: ["entity.other.inherited-class"],
    settings: {
      foreground: FlexokiColorsObject["gr-2"],
      fontStyle: "",
    },
  },
  {
    scope: ["support.function", "support.variable.dom"],
    settings: {
      foreground: FlexokiColorsObject["ye-2"],
      fontStyle: "",
    },
  },
  {
    scope: "support.constant",
    settings: {
      foreground: FlexokiColorsObject["cy-2"],
      fontStyle: "",
    },
  },
  {
    scope: ["support.type"],
    settings: {
      foreground: FlexokiColorsObject["tx"],
      fontStyle: "",
    },
  },
  {
    scope: ["support.class"],
    settings: {
      foreground: FlexokiColorsObject["tx"],
      fontStyle: "",
    },
  },
  {
    scope: "invalid",
    settings: {
      foreground: FlexokiColorsObject["re-2"],
      fontStyle: "",
    },
  },
  {
    scope: "invalid.deprecated",
    settings: {
      foreground: FlexokiColorsObject["re-2"],
      background: "#664E4D",
    },
  },
  {
    scope: "invalid.illegal",
    settings: {
      foreground: FlexokiColorsObject["tx-2"],
    },
  },
  {
    scope: ["meta.diff", "meta.diff.header"],
    settings: {
      foreground: FlexokiColorsObject["tx-2"],
    },
  },
  {
    scope: "markup.deleted",
    settings: {
      foreground: FlexokiColorsObject["re-2"],
    },
  },
  {
    scope: "markup.inserted",
    settings: {
      foreground: FlexokiColorsObject["gr-2"],
    },
  },
  {
    scope: "markup.changed",
    settings: {
      foreground: FlexokiColorsObject["ye-2"],
    },
  },
  {
    scope: "constant.numeric.line-number.find-in-files - match",
    settings: {
      foreground: FlexokiColorsObject["gr-2"],
    },
  },
  {
    scope: "entity.name.filename.find-in-files",
    settings: {
      foreground: FlexokiColorsObject["ye-2"],
    },
  },
  {
    scope: "keyword.other",
    settings: {
      foreground: FlexokiColorsObject["tx"],
    },
  },
  {
    scope: [
      "meta.property-value",
      "support.constant.property-value",
      "constant.other.color",
    ],
    settings: {
      foreground: FlexokiColorsObject["bl-2"],
    },
  },
  {
    scope: "meta.property-value punctuation.separator.key-value",
    settings: {
      foreground: FlexokiColorsObject["tx-2"],
    },
  },
  {
    scope: [
      "keyword.other.use",
      "keyword.other.function.use",
      "keyword.other.namespace",
      "keyword.other.new",
      "keyword.other.special-method",
      "keyword.other.unit",
      "keyword.other.use-as",
    ],
    settings: {
      foreground: FlexokiColorsObject["ma-2"],
    },
  },
  {
    scope: [
      "meta.use support.class.builtin",
      "meta.other.inherited-class support.class.builtin",
    ],
    settings: {
      foreground: FlexokiColorsObject["ma-2"],
    },
  },
  {
    scope: "meta.object-literal.key",
    settings: {
      foreground: FlexokiColorsObject["or-2"],
    },
  },
  {
    scope: "variable.parameter.function.coffee",
    settings: {
      foreground: FlexokiColorsObject["bl-2"],
      fontStyle: "",
    },
  },
  {
    scope: "markup.deleted.git_gutter",
    settings: {
      foreground: FlexokiColorsObject["re-2"],
    },
  },
  {
    scope: "markup.inserted.git_gutter",
    settings: {},
  },
  {
    scope: "markup.changed.git_gutter",
    settings: {
      foreground: FlexokiColorsObject["ye-2"],
    },
  },
  {
    scope: "meta.template.expression",
    settings: {
      foreground: FlexokiColorsObject["bl-2"],
    },
  },
  {
    scope: [
      "variable.other.constant.property",
      "keyword.operator.ternary",
      "keyword.operator.expression.typeof",
    ],
    settings: {
      foreground: FlexokiColorsObject["pu-2"],
    },
  },
  {
    scope: ["keyword.operator.expression.keyof"],
    settings: {
      foreground: FlexokiColorsObject["ma-2"],
    },
  },
  {
    scope: ["entity.name.type", "support.type.python"],
    settings: {
      foreground: FlexokiColorsObject["ye-2"],
    },
  },
  {
    scope: ["entity.name.type.class"],
    settings: {
      foreground: FlexokiColorsObject["or-2"],
    },
  },
  {
    scope: "token.info-token",
    settings: {
      foreground: FlexokiColorsObject["bl-2"],
    },
  },
  {
    scope: "token.warn-token",
    settings: {
      foreground: FlexokiColorsObject["ye-2"],
    },
  },
  {
    scope: "token.error-token",
    settings: {
      foreground: FlexokiColorsObject["re-2"],
    },
  },
  {
    scope: "token.debug-token",
    settings: {
      foreground: FlexokiColorsObject["pu-2"],
    },
  },
  /* Typescript / React */
  {
    scope: [
      "entity.name.tag.tsx",
      "entity.name.tag.js.jsx",
      "entity.name.tag.html",
      "entity.name.tag.xml",
      "entity.name.tag.script.html.vue",
      "entity.name.tag.template.html.vue",
      "entity.name.tag.style.html.vue",
      "entity.name.tag.style.html.vue",
      "entity.name.tag.script.html",
      "entity.name.tag.template.html",
      "entity.name.tag.style.html",
      "entity.name.tag.block.any.html",
    ],
    settings: {
      foreground: FlexokiColorsObject["bl-2"],
      fontStyle: "",
    },
  },
  {
    scope: ["support.class.component.tsx", "support.class.component.js.jsx"],
    settings: {
      foreground: FlexokiColorsObject["ma-2"],
      fontStyle: "",
    },
  },
  {
    scope: ["support.type.primitive.tsx", "support.type.primitive.ts"],
    settings: {
      foreground: FlexokiColorsObject["re-2"],
    },
  },
  {
    scope: "storage.modifier.tsx",
    settings: {
      foreground: FlexokiColorsObject["ma-2"],
    },
  },
  {
    scope: "entity.other.inherited-class.tsx",
    settings: {
      foreground: FlexokiColorsObject["ye-2"],
    },
  },
  {
    scope: "meta.object.member variable.other.readwrite.tsx",
    settings: {
      foreground: FlexokiColorsObject["tx"],
    },
  },
  /* JSON */
  {
    scope: "meta.structure.dictionary.json string.quoted.double.json",
    settings: {
      foreground: FlexokiColorsObject["tx-2"],
    },
  },
  {
    scope: "meta.structure.dictionary.value.json string.quoted.double.json",
    settings: {
      foreground: FlexokiColorsObject["cy-2"],
    },
  },
  {
    scope: ["meta.structure.dictionary.json", "punctuation.definition.string"],
    settings: {
      foreground: FlexokiColorsObject["cy-2"],
    },
  },
  {
    scope: [
      "meta.structure.dictionary.json",
      "support.type.property-name.json",
    ],
    settings: {
      foreground: FlexokiColorsObject["ma-2"],
    },
  },
  /* Markdown and MDX */
  {
    scope: [
      "punctuation.definition.list.begin.markdown",
      "punctuation.definition.list.begin.mdx",
      "punctuation.definition.list.end.markdown",
      "punctuation.definition.list.end.mdx",
      "punctuation.definition.quote.begin.markdown",
      "punctuation.definition.quote.begin.mdx",
      "punctuation.definition.quote.end.markdown",
      "punctuation.definition.quote.end.mdx",
      "meta.separator.markdown",
      "meta.separator.mdx",
      "markup.inline.raw.string.markdown",
      "markup.raw.code.text.mdx",
    ],
    settings: {
      foreground: FlexokiColorsObject["ye-2"],
    },
  },
  {
    scope: ["entity.name.section.markdown", "entity.name.section.mdx"],
    settings: {
      foreground: FlexokiColorsObject["ye-2"],
    },
  },
  {
    scope: [
      "punctuation.definition.heading.markdown",
      "punctuation.definition.heading.mdx",
    ],
    settings: {
      foreground: FlexokiColorsObject["ma-2"],
    },
  },
  {
    scope: ["markup.raw.inline.markdown", "markup.raw.inline.mdx"],
    settings: {
      foreground: FlexokiColorsObject["bl-2"],
    },
  },
  {
    scope: [
      "punctuation.definition.bold.markdown",
      "punctuation.definition.bold.mdx",
      "punctuation.definition.italic.markdown",
      "punctuation.definition.italic.mdx",
      "punctuation.definition.entity",
    ],
    settings: {
      foreground: FlexokiColorsObject["ma-2"],
    },
  },
  {
    scope: [
      "punctuation.definition.string.begin.markdown",
      "punctuation.definition.string.begin.mdx",
      "punctuation.definition.string.end.markdown",
      "punctuation.definition.string.end.mdx",
    ],
    settings: {
      foreground: FlexokiColorsObject["ma-2"],
    },
  },
  {
    scope: [
      "punctuation.definition.metadata.markdown",
      "punctuation.definition.metadata.mdx",
    ],
    settings: {
      foreground: FlexokiColorsObject["ma-2"],
    },
  },
  {
    scope: [
      "markup.underline.link.markdown",
      "markup.underline.link.image.markdown",
      "string.other.link.destination.mdx",
      "meta.image.inline.markdown",
      "meta.image.inline.mdx",
    ],
    settings: {
      foreground: FlexokiColorsObject["ma-2"],
      fontStyle: "",
    },
  },
  {
    scope: [
      "markup.bold.markdown",
      "string.other.strong.asterisk.mdx",
      "markup.italic.markdown",
      "markup.italic.mdx",
    ],
    settings: {
      foreground: FlexokiColorsObject["ma-2"],
    },
  },
  {
    scope: ["markup.italic.markdown", "markup.italic.mdx"],
    settings: {
      fontStyle: "italic",
    },
  },
  {
    scope: ["markup.bold.markdown", "markup.bold.mdx"],
    settings: {
      fontStyle: "bold",
    },
  },
  {
    scope: ["markup.raw.block.markdown", "markup.raw.block.mdx"],
    settings: {
      foreground: FlexokiColorsObject["bl-2"],
    },
  },

  /* Rust */
  {
    scope: "keyword.other.rust",
    settings: {
      foreground: FlexokiColorsObject["pu-2"],
    },
  },
  {
    scope: "keyword.other.fn.rust",
    settings: {
      foreground: FlexokiColorsObject["ma-2"],
    },
  },
  /* PHP */
  {
    name: "PHP: Begin block",
    scope: [
      "punctuation.section.embedded.begin.php",
      "keyword.other.class.php",
    ],
    settings: {
      foreground: FlexokiColorsObject["ma-2"],
    },
  },
  {
    name: "PHP: Class name",
    scope: ["support.class.php"],
    settings: {
      foreground: FlexokiColorsObject["tx"],
    },
  },
  {
    name: "PHP: Function name",
    scope: ["entity.name.function.php"],
    settings: {
      foreground: FlexokiColorsObject["or-2"],
    },
  },
  {
    name: "PHP: Meta use",
    scope: ["meta.use.php"],
    settings: {
      foreground: FlexokiColorsObject["gr-2"],
    },
  },
  /* .env, ini */
  {
    scope: "keyword.other.definition.ini",
    settings: {
      foreground: FlexokiColorsObject["ye-2"],
    },
  },
  /* Prisma */
  {
    name: "Prisma: Primitive",
    scope: "support.type.primitive.prisma",
    settings: {
      foreground: FlexokiColorsObject["ye-2"],
    },
  },
  {
    name: "Prisma: Constant",
    scope: "support.constant.constant.prisma",
    settings: {
      foreground: FlexokiColorsObject["ma-2"],
    },
  },
  {
    name: "Prisma: Relation",
    scope: "variable.language.relations.prisma",
    settings: {
      foreground: FlexokiColorsObject["gr-2"],
    },
  },
  /* yml */
  {
    scope: "entity.name.tag.yaml",
    settings: {
      foreground: FlexokiColorsObject["ma-2"],
    },
  },
  /* java */
  {
    scope: ["variable.other.object.property.java"],
    settings: {
      foreground: FlexokiColorsObject["pu-2"],
    },
  },
  {
    scope: ["storage.modifier.java"],
    settings: {
      foreground: FlexokiColorsObject["bl-2"],
    },
  },
  {
    scope: "storage.type.java",
    settings: {
      foreground: FlexokiColorsObject["ye-2"],
    },
  },
  {
    scope: ["keyword.other.package.java", "keyword.other.import.java"],
    settings: {
      foreground: FlexokiColorsObject["ma-2"],
    },
  },
  {
    scope: "storage.modifier.package.java",
    settings: {
      foreground: FlexokiColorsObject["ye-2"],
    },
  },
  {
    scope: "storage.modifier.import.java",
    settings: {
      foreground: FlexokiColorsObject["tx"],
    },
  },
  {
    scope: "punctuation.separator.java",
    settings: {
      foreground: FlexokiColorsObject["tx"],
    },
  },
  /* xml */
  {
    scope: "meta.tag.xml",
    settings: {
      foreground: FlexokiColorsObject["cy-2"],
    },
  },
  /* Swift */
  {
    scope: [
      "keyword.other.declaration-specifier.swift",
      "keyword.other.declaration-specifier.accessibility.swift",
    ],
    settings: {
      foreground: FlexokiColorsObject["ma-2"],
    },
  },
  {
    scope: [
      "support.type.swift",
      "meta.function-result.swift",
      "variable.language.swift",
      "keyword.operator.custom.infix.swift",
    ],
    settings: {
      foreground: FlexokiColorsObject["ye-2"],
    },
  },
  {
    scope: "variable.parameter.function.swift",
    settings: {
      foreground: FlexokiColorsObject["tx-2"],
    },
  },
  {
    scope: "entity.name.function.swift",
    settings: {
      foreground: FlexokiColorsObject["ye-2"],
    },
  },
  {
    scope: ["variable.parameter.function.swift", "meta.parameter-clause.swift"],
    settings: {
      foreground: FlexokiColorsObject["tx-2"],
    },
  },
  /* Golang */
  {
    scope: ["support.function.go"],
    settings: {
      foreground: FlexokiColorsObject["bl-2"],
    },
  },
  {
    scope: ["keyword.operator.address.go", "keyword.operator.pointer.go"],
    settings: {
      foreground: FlexokiColorsObject["ye-2"],
    },
  },
  {
    // To quickly differentiate concurrency keywords
    scope: ["keyword.channel.go"],
    settings: {
      foreground: FlexokiColorsObject["pu-2"],
    },
  },
  {
    scope: [
      "storage.type.numeric.go",
      "storage.type.string.go",
      "storage.type.error.go",
      "storage.type.boolean.go",
      "storage.type.byte.go",
      "storage.type.uintptr.go",
      "storage.type.error.go",
      "storage.type.rune.go",
      "storage.type.complex.go",
    ],
    settings: {
      foreground: FlexokiColorsObject["ye-2"],
    },
  },
  /* Astro */
  {
    scope: ["entity.name.tag.astro"],
    settings: {
      foreground: FlexokiColorsObject["bl-2"],
    },
  },
  {
    scope: ["support.class.component.astro"],
    settings: {
      foreground: FlexokiColorsObject["ma-2"],
      fontStyle: "",
    },
  },

  /* Python */
  {
    scope: [
      "support.function.builtin.python",
      "meta.function-call.generic.python",
    ],
    settings: {
      foreground: FlexokiColorsObject["or-2"],
    },
  },
  {
    scope: ["entity.name.function.decorator.python"],
    settings: {
      foreground: FlexokiColorsObject["ye-2"],
    },
  },
  /* Rust */
  {
    scope: ["entity.name.function.rust"],
    settings: {
      foreground: FlexokiColorsObject["or-2"],
    },
  },
];
