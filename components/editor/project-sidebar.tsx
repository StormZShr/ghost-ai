"use client"

import { X, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      <aside
        className={cn(
          "fixed top-14 left-0 bottom-0 z-50 w-72 border-r bg-background transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-14 items-center justify-between border-b px-4">
          <h2 className="font-heading text-sm font-medium">Projects</h2>
          <Button variant="ghost" size="icon" className="text-muted-foreground" onClick={onClose}>
            <X className="h-4 w-4" />
            <span className="sr-only">Close sidebar</span>
          </Button>
        </div>

        <Tabs defaultValue="my-projects" className="flex h-[calc(100%-3.5rem)] flex-col">
          <TabsList className="w-full justify-start rounded-none border-b px-4 py-2">
            <TabsTrigger value="my-projects" className="text-xs">My Projects</TabsTrigger>
            <TabsTrigger value="shared" className="text-xs">Shared</TabsTrigger>
          </TabsList>

          <TabsContent value="my-projects" className="flex-1 p-4">
            <div className="flex h-full items-center justify-center">
              <p className="text-sm text-muted-foreground">No projects yet</p>
            </div>
          </TabsContent>

          <TabsContent value="shared" className="flex-1 p-4">
            <div className="flex h-full items-center justify-center">
              <p className="text-sm text-muted-foreground">No shared projects</p>
            </div>
          </TabsContent>

          <div className="border-t p-4">
            <Button className="w-full" variant="default">
              <Plus className="mr-2 h-4 w-4" />
              New Project
            </Button>
          </div>
        </Tabs>
      </aside>
    </>
  )
}