import { Text } from '@gravity-ui/uikit';

export function Counter({ count }: { count: number }) {
  return (
    <div className="counter">
      <Text variant="display-4" color="brand">
        {count}
      </Text>
      <Text variant="subheader-2" color="secondary">
        attractions in plan
      </Text>
    </div>
  );
}