import { useLocale, useTranslations } from 'next-intl';
import { routing } from '@/i18n/routing';

import LocaleSwitcherSelect from './locale-switcher-select';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      {routing.locales.map((cur) => (
        <option key={cur} value={cur}>
          {t('locale', { locale: cur })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}

//   export default function LocaleSwitcher() {
//     const router = useRouter();
//     const [isPending, startTransition] = useTransition();
//     const pathname = usePathname();
//     const params = useParams();
//     const locale = useLocale();

//     function handleOnChange(event) {
//       const nextLocale = event.target.checked ? 'sr' : 'en';
//       startTransition(() => {
//         router.replace({ pathname, params }, { locale: nextLocale });
//       });
//     }

//     return (
//       <label className={[styles.localeSwitcher, 'hoverable'].join(' ')}>
//         <input
//           type='checkbox'
//           className={styles.checkbox}
//           checked={locale === 'sr'}
//           onChange={handleOnChange}
//           name='locale'
//         />
//         <span className={styles.switch} />
//       </label>
//     );
//   }
