import { Switch } from '@gravity-ui/uikit';

export function Toggle({ 
  checked, 
  onChange 
}: {
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <div className="toggle-container">
      <Switch checked={checked} onChange={onChange}>
        Hide visited
      </Switch>
    </div>
  );
}