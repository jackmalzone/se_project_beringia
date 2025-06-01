import type { StructureResolver } from 'sanity/desk'

export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Regular published content
      S.listItem()
        .title('Published Clients')
        .child(
          S.documentList()
            .title('Published Clients')
            .filter('_type == "client" && !defined(_draft)')
        ),
      // Draft content
      S.listItem()
        .title('Draft Clients')
        .child(
          S.documentList()
            .title('Draft Clients')
            .filter('_type == "client" && defined(_draft)')
        ),
      // Add a divider
      S.divider(),
      // All clients (both published and drafts)
      S.listItem()
        .title('All Clients')
        .child(
          S.documentList()
            .title('All Clients')
            .filter('_type == "client"')
        ),
    ])
