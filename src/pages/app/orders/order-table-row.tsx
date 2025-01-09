import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { TableRow, TableCell } from "@/components/ui/table"
import { Search, ArrowRight, X } from "lucide-react"

export function OrderTableRow() {
    return (
        <TableRow>
            <TableCell>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant={"outline"} size="xs">
                            <Search className="h-3 w-3" />
                            <span className="sr-only">Detalhes do pedido</span>
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        Teste
                    </DialogContent>
                </Dialog>
            </TableCell>
            <TableCell className="font-mono"># 1122334455</TableCell>
            <TableCell className="text-muted-foreground"> há 15 min</TableCell>
            <TableCell className="">
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-400" />
                    <span className="font-medium text-muted-foreground">Pendente</span>
                </div>
            </TableCell>
            <TableCell className="font-medium">Kalleo Leandro dos santos Leal</TableCell>
            <TableCell className="font-medium">R$ 1000,00</TableCell>
            <TableCell>
                <Button variant={"ghost"} size="xs">
                    <ArrowRight className="h-3 w-3 mr-2" />
                    Aprovar
                </Button>
            </TableCell>
            <TableCell>
                <Button variant={"ghost"} size="xs">
                    <X className="h-3 w-3 mr-2" />
                    Cancelar
                </Button>
            </TableCell>
        </TableRow>
    )
}