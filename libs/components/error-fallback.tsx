import { useI18n } from '../hooks';
import { Box, Button, Typography } from '../mui';
import { ERROR_FALLBACK_SX } from './error-fallback.styles';

type Props = {
  onRetry: () => void;
};

export function ErrorFallback(props: Readonly<Props>) {
  const { onRetry } = props;
  const { t } = useI18n();

  return (
    <Box role="alert" sx={ERROR_FALLBACK_SX}>
      <Typography variant="h3">{t('error:title')}</Typography>
      <Typography variant="body2">{t('error:description')}</Typography>
      <Typography variant="body2">
        {t('error:additionalDescription')}
      </Typography>
      <Button onClick={onRetry}>{t('error:reloadBtn')}</Button>
    </Box>
  );
}
