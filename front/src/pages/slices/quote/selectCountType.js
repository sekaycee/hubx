import { Switch } from '@headlessui/react'

const SelectCountType = ({ enabled, setEnabled }) => {
  const content = (
    <Switch.Group>
      <div className='flex items-start justify-between mt-3'>
        <Switch.Label className='mr-4'>
          <div className='text-sm font-medium leading-6 text-gray-900'>Switch word count input</div>
          <p className='text-xs font-medium leading-6 text-gray-600'>Do you want to get word count by file upload or manual entry?</p>
        </Switch.Label>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${
            enabled ? 'bg-blue-600' : 'bg-gray-200'
          } relative my-auto inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
        >
          <span
            className={`${
              enabled ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
          />
        </Switch>
      </div>
    </Switch.Group>
  )
  return content
}

export default SelectCountType