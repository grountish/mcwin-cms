const hiddenDocTypes = {
  home: 'Home',
  layout: 'Layout',
}

export const myStructure = (S) =>
  S.list()
    .title('Base')
    .items([
      ...Object.entries(hiddenDocTypes).map(([id, title]) => {
        return S.listItem()
          .title(title)
          .child(S.editor().schemaType(id).documentId(id).title(title))
      }),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !Object.keys(hiddenDocTypes).includes(listItem.getId()),
      ),
    ])
