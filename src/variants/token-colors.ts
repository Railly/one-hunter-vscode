import { OneHunterColorsObject } from "./data";

export const defaultTokenColors = [
  {
    scope: ["comment"],
    settings: {
      foreground: OneHunterColorsObject.gray,
    },
  },
  {
    scope: [
      "comment.block.documentation",
      "comment.block.documentation variable.other",
    ],
    settings: {
      foreground: OneHunterColorsObject.gray,
      fontStyle: "italic",
    },
  },
  {
    scope: ["comment.block.documentation entity.name.type"],
    settings: {
      foreground: OneHunterColorsObject.blueBase,
    },
  },
  {
    scope: ["comment.block.documentation storage.type"],
    settings: {
      foreground: OneHunterColorsObject.grayLight,
      fontStyle: "italic",
    },
  },
  {
    scope: ["string", "punctuation.definition.string.template"],
    settings: {
      foreground: OneHunterColorsObject.cyanBase,
    },
  },
  {
    scope: "constant.numeric",
    settings: {
      foreground: OneHunterColorsObject.yellowBase,
    },
  },
  {
    scope: "constant.language",
    settings: {
      foreground: OneHunterColorsObject.blueDark,
    },
  },
  {
    scope: ["constant.character", "constant.other"],
    settings: {
      foreground: OneHunterColorsObject.blueBase,
    },
  },
  {
    scope: "variable.language.this",
    settings: {
      foreground: OneHunterColorsObject.blueDark,
    },
  },
  {
    scope: [
      "keyword",
      "keyword.operator.new",
      "storage.modifier.async",
      "keyword.operator.less",
    ],
    settings: {
      foreground: OneHunterColorsObject.pinkBase,
      fontStyle: OneHunterColorsObject["keyword-weight"],
    },
  },
  {
    scope: "keyword.operator",
    settings: {
      foreground: OneHunterColorsObject.graySoft,
      fontStyle: "",
    },
  },
  {
    scope: "punctuation",
    settings: {
      foreground: OneHunterColorsObject.graySoft,
    },
  },
  {
    scope: "punctuation.definition.comment",
    settings: {
      foreground: OneHunterColorsObject.gray,
      fontStyle: "",
    },
  },
  {
    scope: "punctuation.definition.tag",
    settings: {
      foreground: OneHunterColorsObject.grayLight,
      fontStyle: "",
    },
  },
  {
    scope: "string.quoted punctuation.definition.string",
    settings: {
      foreground: OneHunterColorsObject.cyanBase,
      fontStyle: "",
    },
  },
  {
    scope: ["string.regexp", "string.regexp punctuation.definition.string"],
    settings: {
      foreground: OneHunterColorsObject.cyanBase,
      fontStyle: "",
    },
  },
  {
    scope: "storage",
    settings: {
      foreground: OneHunterColorsObject.blueDark,
      fontStyle: "",
    },
  },
  {
    scope: "storage.type",
    settings: {
      foreground: OneHunterColorsObject.pinkBase,
      fontStyle: OneHunterColorsObject["keyword-weight"],
    },
  },
  {
    scope: "entity.name.class",
    settings: {
      foreground: OneHunterColorsObject.blueBase,
      fontStyle: "underline",
    },
  },
  {
    scope: [
      "entity.name.function",
      "meta.require",
      "support.function.any-method",
      "variable.function",
      "support.function.builtin.python",
      "meta.function-call.generic.python",
    ],
    settings: {
      foreground: OneHunterColorsObject.blueDark,
      fontStyle: OneHunterColorsObject["keyword-weight"],
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
      foreground: OneHunterColorsObject.blueBase,
    },
  },
  {
    scope: "variable.parameter",
    settings: {
      foreground: OneHunterColorsObject.grayLight,
      fontStyle: "",
    },
  },
  {
    scope: ["source.css.scss", "source.css"],
    settings: {
      foreground: OneHunterColorsObject.cyanBase,
      fontStyle: "",
    },
  },
  {
    scope: ["entity.other.attribute-name"],
    settings: {
      foreground: OneHunterColorsObject.yellowBase,
      fontStyle: "",
    },
  },
  {
    scope: ["support.function", "support.variable.dom"],
    settings: {
      foreground: OneHunterColorsObject.yellowBase,
      fontStyle: "",
    },
  },
  {
    scope: "support.constant",
    settings: {
      foreground: OneHunterColorsObject.blueDark,
      fontStyle: "",
    },
  },
  {
    scope: ["support.type"],
    settings: {
      foreground: OneHunterColorsObject.grayLight,
      fontStyle: "",
    },
  },
  {
    scope: ["support.class"],
    settings: {
      foreground: OneHunterColorsObject.cyanBase,
      fontStyle: "",
    },
  },
  {
    scope: "invalid",
    settings: {
      foreground: OneHunterColorsObject.red,
      fontStyle: "",
    },
  },
  {
    scope: "invalid.deprecated",
    settings: {
      foreground: OneHunterColorsObject.red,
      background: "#664E4D",
    },
  },
  {
    scope: "invalid.illegal",
    settings: {
      foreground: OneHunterColorsObject.grayLight,
    },
  },
  {
    scope: ["meta.diff", "meta.diff.header"],
    settings: {
      foreground: OneHunterColorsObject.slate,
    },
  },
  {
    scope: "markup.deleted",
    settings: {
      foreground: OneHunterColorsObject.redDark,
    },
  },
  {
    scope: "markup.inserted",
    settings: {
      foreground: OneHunterColorsObject.green,
    },
  },
  {
    scope: "markup.changed",
    settings: {
      foreground: OneHunterColorsObject.yellowBase,
    },
  },
  {
    scope: "constant.numeric.line-number.find-in-files - match",
    settings: {
      foreground: `${OneHunterColorsObject.green}A0`,
    },
  },
  {
    scope: "entity.name.filename.find-in-files",
    settings: {
      foreground: OneHunterColorsObject.yellowLight,
    },
  },
  {
    scope: "keyword.other",
    settings: {
      foreground: OneHunterColorsObject.grayBlue,
    },
  },
  {
    scope: [
      "meta.property-value",
      "support.constant.property-value",
      "constant.other.color",
    ],
    settings: {
      foreground: OneHunterColorsObject.blueSoft,
    },
  },
  {
    scope: "meta.property-value punctuation.separator.key-value",
    settings: {
      foreground: OneHunterColorsObject.grayLight,
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
      foreground: OneHunterColorsObject.pinkBase,
    },
  },
  {
    scope: [
      "meta.use support.class.builtin",
      "meta.other.inherited-class support.class.builtin",
    ],
    settings: {
      foreground: OneHunterColorsObject.pinkBase,
      fontStyle: "normal",
    },
  },
  {
    scope: "variable.other",
    settings: {
      foreground: OneHunterColorsObject.grayLight,
      fontStyle: "normal",
    },
  },
  {
    scope: "meta.object-literal.key",
    settings: {
      foreground: OneHunterColorsObject["meta.object-literal.key.tsx"],
      fontStyle: "normal",
    },
  },
  {
    scope: "variable.parameter.function.coffee",
    settings: {
      foreground: OneHunterColorsObject.blueSoft,
      fontStyle: "",
    },
  },
  {
    scope: "markup.deleted.git_gutter",
    settings: {
      foreground: OneHunterColorsObject.redDark,
    },
  },
  {
    scope: "markup.inserted.git_gutter",
    settings: {},
  },
  {
    scope: "markup.changed.git_gutter",
    settings: {
      foreground: OneHunterColorsObject.yellowBase,
    },
  },
  {
    scope: "meta.template.expression",
    settings: {
      foreground: OneHunterColorsObject.blueSoft,
    },
  },
  {
    scope: [
      "variable.other.constant.property",
      "keyword.operator.ternary",
      "keyword.operator.expression.typeof",
    ],
    settings: {
      foreground: OneHunterColorsObject.purpleBase,
    },
  },
  {
    scope: ["entity.name.type", "support.type.python"],
    settings: {
      foreground: OneHunterColorsObject.yellowBase,
    },
  },
  {
    scope: "token.info-token",
    settings: {
      foreground: OneHunterColorsObject.info,
    },
  },
  {
    scope: "token.warn-token",
    settings: {
      foreground: OneHunterColorsObject.warn,
    },
  },
  {
    scope: "token.error-token",
    settings: {
      foreground: OneHunterColorsObject.error,
    },
  },
  {
    scope: "token.debug-token",
    settings: {
      foreground: OneHunterColorsObject.debug,
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
      foreground: OneHunterColorsObject["entity.name.tag.tsx"],
      fontStyle: "",
    },
  },
  {
    scope: ["support.class.component.tsx", "support.class.component.jsx"],
    settings: {
      foreground: OneHunterColorsObject["support.class.component.tsx"],
      fontStyle: "",
    },
  },
  {
    scope: ["support.type.primitive.tsx", "support.type.primitive.ts"],
    settings: {
      foreground: OneHunterColorsObject.blueDark,
    },
  },
  {
    scope: "storage.modifier.tsx",
    settings: {
      foreground: OneHunterColorsObject.pinkBase,
    },
  },
  {
    scope: "entity.other.inherited-class.tsx",
    settings: {
      foreground: OneHunterColorsObject.yellowBase,
    },
  },
  {
    scope: "meta.object.member variable.other.readwrite.tsx",
    settings: {
      foreground: OneHunterColorsObject.grayLight,
    },
  },
  /* JSON */
  {
    scope: "meta.structure.dictionary.json string.quoted.double.json",
    settings: {
      foreground: OneHunterColorsObject.grayLight,
    },
  },
  {
    scope: "meta.structure.dictionary.value.json string.quoted.double.json",
    settings: {
      foreground: OneHunterColorsObject.cyanBase,
    },
  },
  {
    scope: ["meta.structure.dictionary.json", "punctuation.definition.string"],
    settings: {
      foreground: OneHunterColorsObject.cyanBase,
    },
  },
  {
    scope: [
      "meta.structure.dictionary.json",
      "support.type.property-name.json",
    ],
    settings: {
      foreground: OneHunterColorsObject.pinkBase,
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
      foreground: OneHunterColorsObject.yellowBase,
    },
  },
  {
    scope: ["entity.name.section.markdown", "entity.name.section.mdx"],
    settings: {
      foreground: OneHunterColorsObject.blueBase,
      fontStyle: "bold",
    },
  },
  {
    scope: [
      "punctuation.definition.heading.markdown",
      "punctuation.definition.heading.mdx",
    ],
    settings: {
      foreground: OneHunterColorsObject.pinkBase,
      fontStyle: "bold",
    },
  },
  {
    scope: ["markup.raw.inline.markdown", "markup.raw.inline.mdx"],
    settings: {
      foreground: OneHunterColorsObject.blueSoft,
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
      foreground: OneHunterColorsObject.pinkBase,
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
      foreground: OneHunterColorsObject.pinkBase,
    },
  },
  {
    scope: [
      "punctuation.definition.metadata.markdown",
      "punctuation.definition.metadata.mdx",
    ],
    settings: {
      foreground: OneHunterColorsObject.pinkBase,
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
      foreground: OneHunterColorsObject.pinkBase,
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
      foreground: OneHunterColorsObject.pinkBase,
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
      foreground: OneHunterColorsObject.blueSoft,
    },
  },

  /* Rust */
  {
    scope: "keyword.other.rust",
    settings: {
      foreground: OneHunterColorsObject.purpleBase,
    },
  },
  {
    scope: "keyword.other.fn.rust",
    settings: {
      foreground: OneHunterColorsObject.pinkBase,
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
      foreground: OneHunterColorsObject.pinkBase,
    },
  },
  {
    name: "PHP: Class name",
    scope: ["support.class.php"],
    settings: {
      foreground: OneHunterColorsObject.grayLight,
    },
  },
  {
    name: "PHP: Meta use",
    scope: ["meta.use.php"],
    settings: {
      foreground: OneHunterColorsObject.cyanBase,
    },
  },
  /* .env, ini */
  {
    scope: "keyword.other.definition.ini",
    settings: {
      foreground: OneHunterColorsObject.blueBase,
    },
  },
  /* Prisma */
  {
    name: "Prisma: Primitive",
    scope: "support.type.primitive.prisma",
    settings: {
      foreground: OneHunterColorsObject.yellowBase,
    },
  },
  {
    name: "Prisma: Constant",
    scope: "support.constant.constant.prisma",
    settings: {
      foreground: OneHunterColorsObject.pinkBase,
    },
  },
  {
    name: "Prisma: Relation",
    scope: "variable.language.relations.prisma",
    settings: {
      foreground: OneHunterColorsObject.cyanBase,
    },
  },
  /* yml */
  {
    scope: "entity.name.tag.yaml",
    settings: {
      foreground: OneHunterColorsObject.pinkBase,
    },
  },
  /* java */
  {
    scope: "storage.type.java",
    settings: {
      foreground: OneHunterColorsObject.yellowBase,
      fontStyle: OneHunterColorsObject["keyword-weight"],
    },
  },
  {
    scope: ["keyword.other.package.java", "keyword.other.import.java"],
    settings: {
      foreground: OneHunterColorsObject.pinkBase,
      fontStyle: OneHunterColorsObject["keyword-weight"],
    },
  },
  {
    scope: "storage.modifier.package.java",
    settings: {
      foreground: OneHunterColorsObject.yellowBase,
    },
  },
  {
    scope: "storage.modifier.import.java",
    settings: {
      foreground: OneHunterColorsObject.grayLight,
    },
  },
  {
    scope: "punctuation.separator.java",
    settings: {
      foreground: OneHunterColorsObject.graySoft,
    },
  },
  /* xml */
  {
    scope: "meta.tag.xml",
    settings: {
      foreground: OneHunterColorsObject.blueDark,
    },
  },
  /* Swift */
  {
    scope: [
      "keyword.other.declaration-specifier.swift",
      "keyword.other.declaration-specifier.accessibility.swift",
    ],
    settings: {
      foreground: OneHunterColorsObject.pinkBase,
      fontStyle: OneHunterColorsObject["keyword-weight"],
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
      foreground: OneHunterColorsObject.blueBase,
    },
  },
  {
    scope: "variable.parameter.function.swift",
    settings: {
      foreground: OneHunterColorsObject.grayLight,
    },
  },
  {
    scope: "entity.name.function.swift",
    settings: {
      foreground: OneHunterColorsObject.blueBase,
      fontStyle: OneHunterColorsObject["keyword-weight"],
    },
  },
  {
    scope: ["variable.parameter.function.swift", "meta.parameter-clause.swift"],
    settings: {
      foreground: OneHunterColorsObject.white,
    },
  },
  /* Golang */
  {
    scope: ["support.function.go"],
    settings: {
      foreground: OneHunterColorsObject.blueDark,
      fontStyle: OneHunterColorsObject["keyword-weight"],
    },
  },
  {
    scope: ["keyword.operator.address.go", "keyword.operator.pointer.go"],
    settings: {
      foreground: OneHunterColorsObject.blueBase,
    },
  },
  {
    // To quickly differentiate concurrency keywords
    scope: ["keyword.channel.go"],
    settings: {
      foreground: OneHunterColorsObject.purpleBase,
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
      foreground: OneHunterColorsObject.yellowBase,
    },
  },
  /* Astro */
  {
    scope: ["entity.name.tag.astro"],
    settings: {
      foreground: OneHunterColorsObject.pinkBase,
    },
  },
  {
    scope: ["support.class.component.astro"],
    settings: {
      foreground: OneHunterColorsObject["support.class.component.tsx"],
      fontStyle: "",
    },
  },
];
