import { localeAtom, translationAtom } from "@/atoms/translations-atom";
import { useAtomValue, useSetAtom } from "jotai";

const locales = {
  en: "English",
  ru: "Русский",
  ja: "日本語",
  zh: "简体中文",
  es: "Español",
  fr: "Français",
  vi: "Tiếng Việt",
  id: "Bahasa Indonesia",
  pt: "Português (Portugal)",
};

const LanguageSwitcher = ({ hideLabel = false }: { hideLabel?: boolean }) => {
  const setLocale = useSetAtom(localeAtom);
  const t = useAtomValue(translationAtom);

  return (
    <div>
      <div className="flex flex-col gap-2">
        {!hideLabel && (
          <p className="text-sm font-medium">{t("SETTINGS.LANGUAGE.TITLE")}</p>
        )}
        <select
          data-choose-theme
          className="select select-primary"
          onChange={(e) => setLocale(e.target.value as keyof typeof locales)}
        >
          {Object.entries(locales)
            .sort(([, a], [, b]) => a.localeCompare(b))
            .map((entry) => {
              const [locale, label] = entry;
              return (
                <option value={locale} key={locale}>
                  {label.toLocaleUpperCase()}
                </option>
              );
            })}
        </select>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
