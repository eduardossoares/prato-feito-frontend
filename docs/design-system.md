# Prato Feito — Design System

Referência básica de cores e tipografia da interface do Prato Feito.

## Cores

### Tokens semânticos

| Token              | Hex       | Uso                                  |
| ------------------ | --------- | ------------------------------------ |
| `background`       | `#F7F2E8` | Fundo principal da aplicação         |
| `surface`          | `#FFFDF8` | Formulários e superfícies principais |
| `surface-muted`    | `#EFE7D8` | Blocos e agrupamentos secundários    |
| `border`           | `#DED5C6` | Bordas e divisores                   |
| `foreground`       | `#2F302A` | Texto principal                      |
| `foreground-muted` | `#686A60` | Metadados e textos auxiliares        |
| `primary`          | `#C96F4A` | Ações principais                     |
| `primary-hover`    | `#A95739` | Hover e estados ativos               |
| `primary-soft`     | `#F1DDD2` | Fundos de destaque                   |
| `secondary`        | `#5F6C40` | Categorias e ações secundárias       |
| `secondary-soft`   | `#E4E8D5` | Tags e fundos suaves                 |
| `accent`           | `#B78332` | Destaques complementares             |
| `danger`           | `#A8524C` | Erros e ações destrutivas            |

Prefira tokens semânticos nos componentes, como `bg-background`, `text-foreground`, `border-border` e `bg-primary`.

Não use branco puro como fundo dominante.

## Tipografia

### Famílias

| Token          | Fonte       | Uso                                                  |
| -------------- | ----------- | ---------------------------------------------------- |
| `font-sans`    | Nunito Sans | Interface, textos, botões, formulários e comentários |
| `font-display` | Fraunces    | Logotipo e títulos editoriais                        |

Nunito Sans deve ser a fonte dominante. Fraunces deve ser usada com moderação.

### Pesos

- Corpo de texto: `400`
- Metadados e controles: `500`
- Botões, labels e títulos: `600`
- Logotipo e destaques: `700`

### Escala

| Token       | Tamanho | Uso                           |
| ----------- | ------: | ----------------------------- |
| `text-sm`   |   14 px | Metadados e textos auxiliares |
| `text-base` |   16 px | Corpo principal               |
| `text-lg`   |   18 px | Introduções e títulos menores |
| `text-xl`   |   20 px | Títulos de seção              |
| `text-2xl`  |   24 px | Títulos de página             |
| `text-3xl`  |   30 px | Chamadas editoriais           |
| `text-4xl`  |   36 px | Títulos especiais             |

O texto principal da interface não deve ser menor que 14 px.

## Uso recomendado

- Corpo: `font-sans text-base`
- Metadados: `font-sans text-sm font-medium`
- Botões: `font-sans font-semibold`
- Título de seção: `font-display text-xl font-semibold`
- Título de página: `font-display text-3xl font-semibold`
- Logotipo: `font-display font-bold`

A interface deve ser compacta, legível, acolhedora e orientada a conteúdo.
