//@ts-nocheck
import { forwardRef } from 'react'
import { RunButton } from '../../common/RunButton'
import { SandPackStack } from '../../common/Stack'
import { useActiveCode } from '../../hooks/useActiveCode'
import { CodeEditor } from '../CodeEditor'
import type { Decorators } from '../CodeEditor/CodeMirror'
import { FileTabs } from '../FileTabs'

export interface CodeViewerProps {
  showTabs?: boolean
  showLineNumbers?: boolean
  decorators?: Decorators
  code?: string
}

export const SandpackCodeViewer = forwardRef<HTMLDivElement, CodeViewerProps>(
  function SandPackCodeViewer(
    { showTabs = true, showLineNumbers = true, decorators, code },
    ref,
  ) {
    const { activeFilePath } = useActiveCode()

    return (
      <div>
        <SandPackStack ref={ref}>
          {showTabs && <FileTabs />}
          <CodeEditor
            code={code}
            decorators={decorators}
            showLineNumbers={showLineNumbers}
            path={activeFilePath}
            readOnly={false}
          />
          <RunButton />
        </SandPackStack>
      </div>
    )
  },
)
