import React from "react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useImperativeHandle, useRef } from "react";
import { ButtonLoader } from "../button-loader";

export interface DialogDeleteActionRef {
    openDialog(): void;
    closeDialog(): void;
}

interface DialogDeleteActionProps {
    onConfirm?(): void;
    isPending?: boolean;
}

export const DialogDeleteAction = React.forwardRef<
    DialogDeleteActionRef,
    DialogDeleteActionProps
>(({ isPending, onConfirm }, ref) => {
    const [open, setOpen] = React.useState<boolean>(false);

    const closeDialog = React.useCallback(() => setOpen(false), []);
    const openDialog = React.useCallback(() => setOpen(true), []);

    useImperativeHandle(
        ref,
        () => ({
            openDialog,
            closeDialog,
        }),
        [openDialog]
    );

    const handleConfirm = React.useCallback(() => {
        onConfirm?.();
    }, [onConfirm]);
    //

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader className="sm:text-center">
                    <DialogTitle>Suppression</DialogTitle>
                    <DialogDescription>
                        Supprimer l&apos;élément sélectionné{" "}
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <h1 className="text-2xl text-center">
                        Voulez-vous vraiment supprimer?
                    </h1>
                </div>
                <DialogFooter className="sm:justify-center justify-center gap-4">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Annuler
                        </Button>
                    </DialogClose>
                    <ButtonLoader type="button"
                        isLoading={isPending}
                        variant="destructive"
                        onClick={handleConfirm}>
                        Supprimer
                    </ButtonLoader>

                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
})

export function useDeleteDialog() {
    return useRef<DialogDeleteActionRef>(null);
}