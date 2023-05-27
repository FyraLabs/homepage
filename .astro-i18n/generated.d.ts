type DefaultLangCode = "en"
type SupportedLangCode = string
type LangCode = DefaultLangCode | SupportedLangCode
type RouteUri = | "/about" | "/contact" | "/projects" | "/services" | "/thanks" | "/" 
type RouteParams = {"/about": undefined; "/contact": undefined; "/projects": undefined; "/services": undefined; "/thanks": undefined; "/": undefined; }
type TranslationPath = "index.about.title" | "index.about.shortTitle" | "index.about.description" | "index.about.principles.title" | "index.about.principles.open.title" | "index.about.principles.open.description" | "index.about.principles.private.title" | "index.about.principles.private.description" | "index.about.principles.human.title" | "index.about.principles.human.description" | "index.about.team.title" | "index.contact.title" | "index.contact.shortTitle" | "index.contact.description" | "index.contact.socials.title" | "index.contact.emails.title" | "index.contact.emails.contact.title" | "index.contact.emails.security.title" | "index.contact.emails.staff.title" | "index.contact.emails.services.title" | "index.contact.staff.title" | "index.contact.staff.description" | "index.contact.staff.cta" | "index.projects.title" | "index.projects.shortTitle" | "index.projects.description" | "index.projects.projects.exploreCta" | "index.projects.projects.tau.title" | "index.projects.projects.tau.description" | "index.projects.projects.um.title" | "index.projects.projects.um.description" | "index.projects.projects.terra.title" | "index.projects.projects.terra.description" | "index.services.title" | "index.services.shortTitle" | "index.services.description" | "index.services.services.title" | "index.services.services.strategy.title" | "index.services.services.strategy.description" | "index.services.services.operations.title" | "index.services.services.operations.description" | "index.services.services.mediaProduction.title" | "index.services.services.mediaProduction.description" | "index.services.services.webDesign.title" | "index.services.services.webDesign.description" | "index.services.services.systemsEngineering.title" | "index.services.services.systemsEngineering.description" | "index.services.services.softwareDevelopment.title" | "index.services.services.softwareDevelopment.description" | "index.services.contact.title" | "index.services.contact.description" | "index.services.contact.form.email" | "index.services.contact.form.message" | "index.services.contact.form.contact" | "index.services.contact.form.disclaimer" | "index.thanks.title" | "index.thanks.shortTitle" | "index.thanks.description" | "index.title" | "index.description"
type TranslationOptions = { "index.about.title": {} | undefined; "index.about.shortTitle": {} | undefined; "index.about.description": {} | undefined; "index.about.principles.title": {} | undefined; "index.about.principles.open.title": {} | undefined; "index.about.principles.open.description": {} | undefined; "index.about.principles.private.title": {} | undefined; "index.about.principles.private.description": {} | undefined; "index.about.principles.human.title": {} | undefined; "index.about.principles.human.description": {} | undefined; "index.about.team.title": {} | undefined; "index.contact.title": {} | undefined; "index.contact.shortTitle": {} | undefined; "index.contact.description": {} | undefined; "index.contact.socials.title": {} | undefined; "index.contact.emails.title": {} | undefined; "index.contact.emails.contact.title": {} | undefined; "index.contact.emails.security.title": {} | undefined; "index.contact.emails.staff.title": {} | undefined; "index.contact.emails.services.title": {} | undefined; "index.contact.staff.title": {} | undefined; "index.contact.staff.description": {} | undefined; "index.contact.staff.cta": {} | undefined; "index.projects.title": {} | undefined; "index.projects.shortTitle": {} | undefined; "index.projects.description": {} | undefined; "index.projects.projects.exploreCta": {} | undefined; "index.projects.projects.tau.title": {} | undefined; "index.projects.projects.tau.description": {} | undefined; "index.projects.projects.um.title": {} | undefined; "index.projects.projects.um.description": {} | undefined; "index.projects.projects.terra.title": {} | undefined; "index.projects.projects.terra.description": {} | undefined; "index.services.title": {} | undefined; "index.services.shortTitle": {} | undefined; "index.services.description": {} | undefined; "index.services.services.title": {} | undefined; "index.services.services.strategy.title": {} | undefined; "index.services.services.strategy.description": {} | undefined; "index.services.services.operations.title": {} | undefined; "index.services.services.operations.description": {} | undefined; "index.services.services.mediaProduction.title": {} | undefined; "index.services.services.mediaProduction.description": {} | undefined; "index.services.services.webDesign.title": {} | undefined; "index.services.services.webDesign.description": {} | undefined; "index.services.services.systemsEngineering.title": {} | undefined; "index.services.services.systemsEngineering.description": {} | undefined; "index.services.services.softwareDevelopment.title": {} | undefined; "index.services.services.softwareDevelopment.description": {} | undefined; "index.services.contact.title": {} | undefined; "index.services.contact.description": {} | undefined; "index.services.contact.form.email": {} | undefined; "index.services.contact.form.message": {} | undefined; "index.services.contact.form.contact": {} | undefined; "index.services.contact.form.disclaimer": {} | undefined; "index.thanks.title": {} | undefined; "index.thanks.shortTitle": {} | undefined; "index.thanks.description": {} | undefined; "index.title": {} | undefined; "index.description": {} | undefined; }

declare module "astro-i18n" {
	export * from "astro-i18n/"
	
	export function l<Uri extends RouteUri>(
		route: Uri | string & {},
		...args: Uri extends keyof RouteParams
			? undefined extends RouteParams[Uri]
				? [params?: Record<string, string>, targetLangCode?: LangCode, routeLangCode?: LangCode]
				: [params: RouteParams[Uri], targetLangCode?: LangCode, routeLangCode?: LangCode]
			: [params?: Record<string, string>, targetLangCode?: LangCode, routeLangCode?: LangCode]
	): string
	
	export function t<Path extends TranslationPath>(
		path: Path | string & {},
		...args: undefined extends TranslationOptions[Path]
			? [options?: keyof TranslationOptions extends Path ? Record<string, unknown> : TranslationOptions[Path], langCode?: LangCode]
			: [options: TranslationOptions[Path], langCode?: LangCode]
	): string
	
	export function extractRouteLangCode(route: string): LangCode | undefined
	
	type Translation = string | { [translationKey: string]: string | Translation }
	type Translations = { [langCode: string]: Record<string, Translation> }
	type RouteTranslations = { [langCode: string]: Record<string, string> }
	type InterpolationFormatter = (value: unknown, ...args: unknown[]) => string
	class AstroI18n {
		defaultLangCode: DefaultLangCode
		supportedLangCodes: SupportedLangCode[]
		showDefaultLangCode: boolean
		translations: Translations
		routeTranslations: RouteTranslations
		get langCodes(): LangCode[]
		get langCode(): LangCode
		set langCode(langCode: LangCode)
		get formatters(): Record<string, InterpolationFormatter>
		init(Astro: { url: URL }, formatters?: Record<string, InterpolationFormatter>): void
		addTranslations(translations: Translations): void
		addRouteTranslations(routeTranslations: RouteTranslations): void
		getFormatter(name: string): InterpolationFormatter | undefined
		setFormatter(name: string, formatter: InterpolationFormatter): void
		deleteFormatter(name: string): void
	}
	export const astroI18n: AstroI18n
}
