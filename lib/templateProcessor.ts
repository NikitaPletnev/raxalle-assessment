export function processTemplate(
  template: string,
  variables: Record<string, any>
) {
  const parsed = JSON.parse(template);

  // TODO process

  return JSON.stringify(parsed);
}
