export default function url(strings:TemplateStringsArray, ...variables:any[]) {
    return '/api' + strings[0]
}